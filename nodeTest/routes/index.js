var express = require('express');
var router = express.Router();

router.get(/^\/test\/(.+)?/, (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send('hello router');
});

module.exports = router;