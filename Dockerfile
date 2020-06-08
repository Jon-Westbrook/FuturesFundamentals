# use the same node version as in .nvmrc
FROM node:10.13.0

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY ./build .

# expose the port the app runs on
EXPOSE 3000

CMD [ "yarn", "start" ]