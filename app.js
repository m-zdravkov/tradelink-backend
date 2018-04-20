const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();

// Model
Area = require('./models/Area');

const {
    truncate,
    stripTags,
    formatDate,
    select,
    editIcon
} = require('./helpers/hbs');

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

// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handlebars Middleware
app.engine('handlebars', exphbs({
    helpers: {
        truncate: truncate,
        stripTags: stripTags,
        formatDate:formatDate,
        select:select,
        editIcon: editIcon
    },
    defaultLayout:'main'
}));
app.set('view engine', 'handlebars');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
let index = require('./routes/index');
let areas = require('./routes/areas');
let areasRendered = require('./routes/rendered/areas');

app.use('/', index);
app.use('/api/areas', areas);
app.use('/areas', areasRendered);

app.get('/api', (req, res) => {
    res.send("API index");
});

const port = process.env.port || 8080;

app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});