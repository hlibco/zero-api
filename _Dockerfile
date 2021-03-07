# aA base stage for all future stages
# with only prod dependencies and
# no code yet
FROM node:12.17.0-alpine as base

ENV NODE_ENV=production
ENV PORT=8080
ENV PATH=/app/node_modules/.bin:$PATH

WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
COPY tsconfig.json ./
COPY tsconfig.*.json ./
COPY jest.*.js ./
COPY .eslintrc.js ./
RUN yarn install --production=true

# A dev and build-only stage. we don't need to
# copy in code since we bind-mount it
FROM base as dev
ARG NODE_ENV=development
ARG PLANET
ENV NODE_ENV=${NODE_ENV}
ENV PLANET=${PLANET}
RUN yarn install --production=false
CMD ["/app/node_modules/.bin/nodemon"]

FROM dev as build
COPY . .
RUN yarn lint
RUN yarn test
RUN yarn build

# This only has minimal deps and files
FROM base as prod
COPY --from=build /app/dist/ .

# Start
EXPOSE 8080
CMD ["node", "index.js"]
