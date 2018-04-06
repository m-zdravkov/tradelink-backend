const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// Model
Area = require('./models/Area');

// Connect to mongoose
mongoose.connect('mongodb://localhost/tradelink-dev')
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

const db = mongoose.connection;

// Load Profile model
require('./models/Profile');
const Profile = mongoose.model('profiles');

// Middleware
app.use((req, res, next) => {
    // Console logger
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

// Routes
app.get('/', (req, res) => {
    res.send('Please use /api');
});

app.get('/api', (req, res) => {
    res.send("API index");
});

// GET Areas
app.get('/api/areas', (req, res) => {
    Area.getAreas((err, objects) => {
        if(err) {
            throw err;
        }
        res.json(objects);
    });
});

// GET AreaById
app.get('/api/areas/:_id', (req, res) => {
    Area.getAreaById(req.params._id, (err, object) => {
        if(err) {
            throw err;
        }
        res.json(object);
    });
});

// POST Area
app.post('/api/areas', (req, res) => {
    let object = req.body;
    Area.addArea(object, (err, object) => {
        if(err) {
            throw err;
        }
        res.json(object);
    });
})

/*app.get('/about', (req, res) => {
    res.send('ABOUT');
});

app.post('/profile', (req, res) => {
    res.send('OK');
});*/

const port = 8080;

app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});