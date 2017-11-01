'use strict';

const express = require('express');
const app = express();
const path = require('path');

const ROOT = '/testing-utility';

let Controller = require('./controllers/Controller');
let DummyDataController = require('./controllers/DummyDataController');
app.use(ROOT, Controller);
app.use(ROOT + DummyDataController.getPath(), DummyDataController);
app.use(express.static(path.join(__dirname, '../tus-front-end/build')));

module.exports = app;
