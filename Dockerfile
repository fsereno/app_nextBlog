FROM node:14.17.6

WORKDIR /usr/src/app

COPY ./blogg ./

RUN npm install