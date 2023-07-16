FROM node:18.12.0-bullseye-slim AS build
WORKDIR /app
COPY . ./
RUN npm install --force --registry=https://registry.npm.taobao.org/
RUN npm run build
RUN tar -czvf output.tar.gz ./.output/ .env

FROM node:18.12.0-bullseye-slim
WORKDIR /app
COPY --from=build /app/output.tar.gz /app/
RUN tar -xzvf /app/output.tar.gz -C /app

# 环境变量
# ENV NUXT_PUBLIC_APP_NAME=website-next

ENTRYPOINT node /app/.output/server/index.mjs

EXPOSE 3000
