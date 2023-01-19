# Build static files
FROM node:18-alpine as builder
WORKDIR /app
COPY .. .
RUN npm ci
RUN npm run build

# Bundle static files with nginx
FROM nginx:1.23-alpine as production
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
