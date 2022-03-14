## --------- for development ---------
FROM node:16.13.1-alpine AS builder

# install dependecies
RUN apk update
RUN apk add --no-cache git build-base gcc abuild make bash

RUN mkdir -p /home/node/app && chown node:node /home/node/app

USER node

WORKDIR /home/node/app

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

# set DEBIAN_FRONTEND to noninteractive.
ENV DEBIAN_FRONTEND noninteractive

# default to port 80 for node, and 9229 and 9230 (tests) for debug
ARG PORT=8080
ENV PORT $PORT
EXPOSE $PORT 9240 9241

# install dependencies first, in a different location for easier app bind mounting for local development

COPY ./package*.json ./
RUN npm install

# copy in our source code last, as it changes the most
COPY . .

## --------- for production build ---------
FROM builder AS prod-builder

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

RUN GENERATE_SOURCEMAP=false && npm run build

## --------- for production deployment ---------
FROM nginx:stable AS production

EXPOSE 80

COPY --from=prod-builder /home/node/app/build /usr/share/nginx/html

COPY --from=prod-builder /home/node/app/nginx.conf /etc/nginx/conf.d/default.conf
