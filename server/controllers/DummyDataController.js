'use strict';

let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let DummyDataService = require('../service/DummyDataService');

const PATH = '/dummy';
router.getPath = function() {
    return PATH;
}

router.use(bodyParser.json());

router.get('/random/int', (req, res) => {
    let min = req.query.min !== undefined && parseInt(req.query.min) !== NaN ? parseInt(req.query.min) : 0;
    let max = req.query.max !== undefined && parseInt(req.query.max) ? parseInt(req.query.max) : 100;

    let randomInt = DummyDataService.getRandomInt(min, max);
    let response = {};
    response.int = randomInt;
    response.min = min;
    response.max = max;

    res.status(200).send(JSON.stringify(response));
});

module.exports = router;
