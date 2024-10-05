FROM node:22.9.0-alpine3.19

WORKDIR /node/app/prod

COPY dist /node/app/prod/dist
COPY package.json /node/app/prod/package.json
COPY yarn.lock /node/app/prod/yarn.lock

RUN yarn install --production

CMD [ "yarn", "start:prod" ]