FROM dhi.io/node:24-alpine-dev AS builder

WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM dhi.io/nginx:1.30-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
