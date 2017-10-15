'use strict';

let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/health', (req, res) => {
    res.status(200).send('{ "status" : "UP" }');
});

router.get('/hello', (req, res) => {
    if ( req.query.user !== undefined ) {
        let user = req.query.user;
        res.status(200).send(`hello, ${user}!`);
    } else {
        res.status(400).send('{ "err" : "no user defined; who should we say \'hi\' to?" }')
    }   
});

router.post('/parrot', (req, res) => {
    res.status(200).send(req.body);
});

module.exports = router;
