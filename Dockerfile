FROM node:8.7.0

COPY server/package.json server/package.json
RUN npm install

COPY . .

CMD npm start --prefix server/