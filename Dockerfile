# use the same node version as in .nvmrc
FROM node:10.13.0

# get vars from cli
ARG USERNAME
ARG PASSWORD
ARG PORT=3000

# set env
ENV NODE_ENV=production
ENV USERNAME=$USERNAME
ENV PASSWORD=$PASSWORD
ENV PORT=$PORT

WORKDIR /usr/src/app

COPY ./build ./public
COPY package.json .
COPY server.js .

RUN yarn install

# expose the port the app runs on
EXPOSE $PORT

CMD [ "yarn", "start" ]