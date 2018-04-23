let requireUncached = require('require-uncached');
let express = require('express');
let router = express.Router();
let Client = require('../models/Client');
let crudRouter = requireUncached('./crudRouter')(Client);
let defaultCrudResponse = require('./defaultCrudResponse')();

// At /api/clients

router.use('/', crudRouter);

module.exports = router;