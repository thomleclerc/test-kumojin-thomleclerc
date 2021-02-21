FROM node:10.16.2-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 3009
CMD [ "node", "index.js"]