'use strict';

import express = require('express');
import bodyParser = require('body-parser');
import DummyDataService = require('../service/DummyDataService');

const router = express.Router();
const PATH = '/dummy';
const CONTENT_TYPE = 'json';

router.getPath = function() {
    return PATH;
}

router.use(bodyParser.json());

router.get('/random/int', (req, res) => {
    let min = req.query.min !== undefined && parseInt(req.query.min) !== NaN ? parseInt(req.query.min) : 0;
    let max = req.query.max !== undefined && parseInt(req.query.max) ? parseInt(req.query.max) : 100;

    let randomInt = DummyDataService.getRandomInt(min, max);
    let response = {
        "int" : randomInt,
        "min" : min,
        "max" : max
    };

    res.type(CONTENT_TYPE).status(200).send(JSON.stringify(response));
});

router.post('/parrot', (req, res) => {
    res.type(CONTENT_TYPE).status(200).send(req.body);
});

export default router;
