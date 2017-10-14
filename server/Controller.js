let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    res.status(200).send('{ "status" : "UP" }');
});

router.get('/hello', (req, res) => {
    let user = 'anon';
    if ( req.query.user !== undefined )
        user = req.query.user;
    res.status(200).send(`hello, ${user}!`);
});

module.exports = router;
