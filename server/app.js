'use strict';

let express = require('express');
let app = express();

const ROOT = '/testing-utility';

let Controller = require('./controllers/Controller');
let DummyDataController = require('./controllers/DummyDataController');
app.use(ROOT, Controller);
app.use(ROOT + DummyDataController.getPath(), DummyDataController);

module.exports = app;
