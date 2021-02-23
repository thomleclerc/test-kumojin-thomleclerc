FROM node:10.16.2-alpine as builder

RUN mkdir -p /app
WORKDIR /app

COPY package.json ./
RUN npm install --silent

COPY . ./
RUN npm build

# EXPOSE 3000

RUN npm run build

FROM nginx:1.16.0-alpine

COPY --from=builder /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# docker run -it --rm -p 3001:3000 kumojin-frontend .

# docker run -p 80:80 my-react-app