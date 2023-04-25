FROM node:15
WORKDIR /client
COPY ./package.json /client
RUN npm install
COPY ./ /client
EXPOSE 3000

