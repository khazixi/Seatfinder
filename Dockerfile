FROM node:lts-slim AS build
WORKDIR /app
RUN corepack enable
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install
RUN ls
COPY . .
RUN pnpm run build

FROM nginx:alpine AS runtime
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
