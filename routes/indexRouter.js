const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        "api/areas":"areas",
        "api/clients":"clients",
        "api/profiles":"profiles",
        "api/clientprofiles":"clientprofiles",
        "api/contacts":"contacts",
    });
});

module.exports = router;