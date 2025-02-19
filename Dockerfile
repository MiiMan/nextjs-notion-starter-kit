# Этап сборки приложения
FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Финальный этап с Nginx + SSL
FROM nginx:alpine

# Устанавливаем зависимости для генерации сертификатов
RUN apk add --no-cache openssl

# Создаем директории для сертификатов
RUN mkdir -p /etc/nginx/ssl

# Генерируем самоподписанный сертификат (для теста)
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/nginx/ssl/selfsigned.key \
    -out /etc/nginx/ssl/selfsigned.crt \
    -subj "/CN=info.itatmisis.ru"

# Копируем собранные файлы Next.js
COPY --from=builder /app/.next/static /usr/share/nginx/html/_next/static
COPY --from=builder /app/public /usr/share/nginx/html/

# Копируем конфигурацию Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]