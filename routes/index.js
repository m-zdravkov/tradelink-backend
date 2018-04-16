const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //res.send('Please use /api');
    res.render('index/welcome');
});

module.exports = router;