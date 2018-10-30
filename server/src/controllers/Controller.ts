'use strict';

import express = require('express');
import bodyParser = require('body-parser');


const router = express.Router();
const CONTENT_TYPE = 'json';

router.use(bodyParser.json());

router.get('/health', (req, res) => {
    res.type(CONTENT_TYPE).status(200).send('{ "status" : "UP" }');
});

router.get('/hello', (req, res) => {
    if ( req.query.user !== undefined ) {
        let user = req.query.user;
        res.type(CONTENT_TYPE).status(200).send(`hello, ${user}!`);
    } else {
        res.type(CONTENT_TYPE).status(400).send('{ "err" : "no user defined; who should we say \'hi\' to?" }')
    }   
});

export default router;
