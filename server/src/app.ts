'use strict';

const ROOT = '/testing-utility';

import express = require('express');
import path = require('path');
import Controller = require('./controllers/Controller');
import DummyDataController = require('./controllers/DummyDataController');

const app = express();

app.use(ROOT, Controller);
app.use(ROOT + DummyDataController.getPath(), DummyDataController);
app.use(express.static(path.join(__dirname, '../tus-front-end/build')));

export default app;
