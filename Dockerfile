FROM node:latest AS build
RUN git clone https://github.com/Ziobrowskyy/ava.git
WORKDIR /ava
RUN npm install

FROM build:latest AS test
WORKDIR /ava
CMD npm run test

FROM build:latest AS publish
WORKDIR /ava
RUN npm publish