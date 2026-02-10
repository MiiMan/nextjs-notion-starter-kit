import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'ITAM-06f0890b6ec044baa2ccd69d500a3685',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'ITAM: Информация',
  domain: 'info.itatmisis.ru',
  author: 'itatmisis',

  // open graph metadata (optional)
  description: 'ITAM: Информация',

  // social usernames (optional)
  github: 'itatmisis',
  youtube: '@ITatMISIS',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
    '/knowledge_base': '068fa05c963949048ea24ad0034564c5',
    '/opportunities': '61fa4146e50343488b2961b1ad0a8479',
    '/calendar': '03056e64a0e24db5b8d46f4f1017be68',
    '/tech_support' : '92e940cdafd04894894f08b938dd9c90',
    '/courses' : '65fa4f27e5c24082b336efe9588e1864',
    '/informational_resources' : '9711674032a5497bac0ea533ab5fa60a',
    '/find_team' : 'e036ff7412c34f249d1d5682267e99cd',
    '/hack_support' : '0f2e1ac567234fb6aa746056c480e999',
    '/startup' : '75419ca4dae04de1a68d7ee8737ef08e',
    '/events' : 'a41856208f6f4fc98f7ae859dbead4da',
    '/trips' : '--d79a2e3070674c5eaaba06acc6843f52',
    '/commuinity' : 'itam-8c7abbe6d2264bd0a9513831bfacaa10',
    '/assessments' : '59622c76e7514b919a883a329b8ebefb',
    '/coworking' : 'itam-8657f44d7525437c9b8bcd681fa65634',
    '/mentors' : '2b058a6346c6480e8ff92de1dc995b8e',
},

  isSearchEnabled: false,
  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Главная',
      pageId: 'ITAM-06f0890b6ec044baa2ccd69d500a3685'
    },
    {
      title: 'База знаний',
      pageId: '068fa05c963949048ea24ad0034564c5'
    },
    {
      title: 'Витрина возможностей',
      pageId: '61fa4146e50343488b2961b1ad0a8479'
    },
    {
      title: 'Календарь',
      pageId: '03056e64a0e24db5b8d46f4f1017be68'
    }
  ]
})
