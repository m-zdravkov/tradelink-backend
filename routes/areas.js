const express = require('express');
const router = express.Router();

// At /api/areas

// GET Areas
router.get('/', (req, res) => {
    Area.getAreas((err, objects) => {
        if(err) {
            throw err;
        }
        res.json(objects);
    });
});

// GET AreaById
router.get('/:_id', (req, res) => {
    Area.getAreaById(req.params._id, (err, object) => {
        if(err) {
            throw err;
        }
        res.json(object);
    });
});

// POST Area
router.post('/', (req, res) => {
    let object = req.body;
    Area.addArea(object, (err, object) => {
        if(err) {
            throw err;
        }
        res.json(object);
    });
})

// PUT Area
router.put('/:_id', (req, res) => {
    let id = req.params._id;
    let object = req.body;
    Area.updateArea(id, object, {}, (err, object) => {
        if(err) {
            throw err;
        }
        res.json(object);
    });
});

// DELETE Area
router.delete('/:_id', (req, res) => {
    let id = req.params._id;
    Area.deleteArea(id, {}, (err, id) => {
        if(err) {
            throw err;
        }
        res.json(id);
    });
})

module.exports = router;