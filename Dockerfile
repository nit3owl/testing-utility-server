FROM node:alpine

#install mongodb
#RUN apk add --no-cache mongodb && \
#    rm /usr/bin/mongoperf

#VOLUME /data/db
#EXPOSE 27017 28017

#install libc6-compat
RUN apk add --no-cache libc6-compat

#build server
#copy package.json and install dependencies
COPY server/package.json /server/package.json
WORKDIR /server
RUN npm install

COPY . .

#build front-end
#copy package.json and install dependencies
COPY tus-front-end /tus-front-end
#COPY tus-front-end/package.json /tus-front-end/package.json
WORKDIR /tus-front-end
RUN npm install
#dont know why, but react-scripts is not installed 
RUN npm install react-scripts

#create "production" build
RUN npm run build

COPY . .

#expose node server port
EXPOSE 3000

ENTRYPOINT ["npm", "start", "--prefix", "server"]