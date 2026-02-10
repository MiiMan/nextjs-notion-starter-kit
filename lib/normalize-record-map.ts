import { type ExtendedRecordMap } from 'notion-types'

type RecordMapTable =
  | 'block'
  | 'collection'
  | 'collection_view'
  | 'space'
  | 'notion_user'

const TABLES_TO_NORMALIZE: RecordMapTable[] = [
  'block',
  'collection',
  'collection_view',
  'space',
  'notion_user'
]

/**
 * Notion may return mixed entity shapes:
 * - legacy: { value: Entity, role?: string }
 * - wrapped: { value: { value: Entity, role: string }, spaceId?: string }
 *
 * react-notion-x expects the legacy shape, so we unwrap wrapped entries.
 *
 * Also normalizes blocks without `type` that have no content to type "text",
 * so they render as notion-blank consistently on server and client (avoids hydration mismatch).
 */
export function normalizeRecordMap(recordMap: ExtendedRecordMap): ExtendedRecordMap {
  const map = recordMap as unknown as Record<string, Record<string, { value?: unknown }>>
  for (const table of TABLES_TO_NORMALIZE) {
    const entries = map?.[table]
    if (!entries) continue

    for (const key of Object.keys(entries)) {
      const entry: any = entries[key]
      let value = entry?.value

      if (
        value &&
        typeof value === 'object' &&
        'value' in value &&
        'role' in value &&
        entry?.role == null
      ) {
        entry.value = value.value
        entry.role = value.role
        value = entry.value
      }

      // Гидравлика: любой блок без контента приводим к type "text", чтобы
      // react-notion-x рендерил его как notion-blank и на сервере, и на клиенте
      // (иначе неизвестные/новые типы попадают в default → пустой div → mismatch)
      if (table === 'block' && value && typeof value === 'object') {
        const block = value as { type?: string; properties?: unknown; content?: unknown[] }
        const hasNoContent =
          !block.properties &&
          (!block.content || !Array.isArray(block.content) || block.content.length === 0)
        if (hasNoContent) {
          block.type = 'text'
        }
      }
    }
  }

  return recordMap
}
