const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to mongoose
mongoose.connect('mongodb://localhost/tradelink-dev')
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// Middleware
app.use((req, res, next) => {
    // Console logger
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

// Index route
app.get('/', (req, res) => {
    res.send('INDEX');
});

// About route
app.get('/about', (req, res) => {
    res.send('ABOUT');
});

const port = 8080;

app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});