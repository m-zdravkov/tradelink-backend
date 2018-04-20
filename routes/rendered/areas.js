const express = require('express');
const router = express.Router();

// At /areas

// GET Areas
router.get('/', (req, res) => {
    Area.getAreas((err, objects) => {
        if(err) {
            throw err;
        }
        //res.json(objects);
        res.render('areas/index', { areas: objects });
    });
});

module.exports = router;