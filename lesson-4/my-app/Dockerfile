# FROM node:20-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm i
# COPY . .
# EXPOSE 5173
# CMD ["npm", "run", "dev", "--", "--host"]

# Создаем промежуточный Docker-image, 
# который собирает проект в папку /dist
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build

# Создаем итоговый Docker-image, который копирует папку /dist
# из предыдущего образа builder и базируется на веб-сервере nginx
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]