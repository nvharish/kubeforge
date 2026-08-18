FROM dhi.io/node:24-alpine-dev AS builder

WORKDIR /app
COPY package*.json ./

RUN npm install --omit=dev

COPY . .

FROM dhi.io/node:24-alpine

WORKDIR /app
COPY --from=builder /app ./

EXPOSE 3000

ENTRYPOINT ["node", "index.js"]
