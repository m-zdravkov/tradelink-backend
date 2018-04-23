let requireUncached = require('require-uncached');
let express = require('express');
let router = express.Router();
let Area = require('../models/Area');
let crudRouter = requireUncached('./crudRouter')(Area);
let defaultResponse = require('./defaultResponse')();

// At /api/areas

router.get('/test', (req, res) => {
    defaultResponse.jsonOk(res);
});

router.use('/', crudRouter);

module.exports = router;