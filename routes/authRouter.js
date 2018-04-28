let express = require('express');
let router = express.Router();

router.get('/login', (req, res) => {
    res.send(405, {"error" : "Can not use GET to log in, remember to use POST."});
});

router.get('/register', (req, res) => {
    res.send(405, {"error" : "Can not use GET to register, remember to use POST."});
});

router.post('/login', (req, res) => {

});

module.exports = router;