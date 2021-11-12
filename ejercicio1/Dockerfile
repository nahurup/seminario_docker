FROM node:alpine

RUN mkdir -p /myapp

WORKDIR /myapp

COPY . /myapp

RUN npm install

EXPOSE 3000

CMD npm run start:dev