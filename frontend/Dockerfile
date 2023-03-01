FROM node:18-alpine

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn --ignore-platform
RUN yarn cache clean
COPY . ./

ENV PORT 3001
ENV NODE_ENV production

RUN yarn build
CMD ["yarn", "start"]
