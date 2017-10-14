'use strict';

let express = require('express');
let app = express();

const ROOT = '/testing-utility';

let Controller = require('./Controller');
app.use(ROOT, Controller);

module.exports = app;

