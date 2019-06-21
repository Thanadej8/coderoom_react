# 1st Stage
FROM node:10.8.0-alpine AS builder

ENV ROOT=/var/www/coderoom_react

RUN mkdir -p $ROOT/src

WORKDIR $ROOT/src

COPY yarn.lock package.json ./

RUN yarn install

COPY . .

RUN yarn build

# 2nd Stage
FROM nginx:1.16.0-alpine AS base

ENV ROOT=/var/www/coderoom_react

RUN apk update && apk add --no-cache bash openssh

RUN mkdir -p $ROOT/src/build

COPY --from=builder $ROOT/src/build $ROOT/src/build

WORKDIR $ROOT/src

COPY nginx.conf entrypoint.sh  ./

CMD ./entrypoint.sh