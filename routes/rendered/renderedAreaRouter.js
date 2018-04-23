const express = require('express');
const router = express.Router();
const Area = require('../../models/Area');
const resourceController = require('../../controllers/resourceController')(Area);

// At /areas

// GET Areas
router.get('/', (req, res) => {
    resourceController.get((err, objects) => { 
        if(err) {
            throw err;
        }
        res.render('areas/index', { areas: objects });
    });
});

module.exports = router;