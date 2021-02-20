FROM node:10.16.3-alpine

RUN mkdir -p /src/app
WORKDIR /src/app

COPY package.json ./
RUN yarn

COPY . ./
RUN npm build

EXPOSE 3000

CMD ["npm", "start"]