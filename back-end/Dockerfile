FROM node:20.15.0-alpine3.20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node","src/index.js"]