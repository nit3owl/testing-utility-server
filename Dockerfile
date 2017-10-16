FROM alpine:edge

#install mongodb
#RUN apk add --no-cache mongodb && \
#    rm /usr/bin/mongoperf

#VOLUME /data/db
#EXPOSE 27017 28017

#install nodejs and npm
RUN apk add --update nodejs nodejs-npm

#copy package.json and install dependencies
COPY server/package.json server/package.json
RUN npm install

#expose node server port
EXPOSE 3000

COPY . .

ENTRYPOINT ["npm", "start", "--prefix", "server"]