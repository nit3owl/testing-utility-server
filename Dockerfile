FROM node:alpine

#install mongodb
#RUN apk add --no-cache mongodb && \
#    rm /usr/bin/mongoperf

#VOLUME /data/db
#EXPOSE 27017 28017

#install libc6-compat
RUN apk add --no-cache libc6-compat

#build express server
COPY server/package.json /tus/server/package.json
WORKDIR /tus/server
RUN npm install

#build react app
COPY tus-front-end /tus
WORKDIR /tus/tus-front-end
RUN npm install
RUN npm install react-scripts

WORKDIR /tus

COPY . .

#create "production" build
RUN npm run build

#expose node server port
EXPOSE 3000

ENTRYPOINT ["npm", "start", "--prefix", "server"]