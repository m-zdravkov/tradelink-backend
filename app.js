const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
let requireUncached = require('require-uncached');

const app = express();

// Models
let Client = require('./models/Client');
let Area = require('./models/Area');
let Profile = require('./models/Profile');
let ClientProfile = require('./models/ClientProfile');
let Contact = require('./models/Contact');

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
//require('./models/Profile');
//const Profile = mongoose.model('profiles');

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

// Routers
let indexRt = require('./routes/index');
let areaRt = require('./routes/areaRouter');
let clientRt = require('./routes/clientRouter');
let clientProfileRt = requireUncached('./routes/crudRouter')(ClientProfile);
let profileRt = requireUncached('./routes/crudRouter')(Profile);
let contactRt = requireUncached('./routes/crudRouter')(Contact);
// Rendered
let areasRendered = require('./routes/rendered/renderedAreaRouter');

// Middleware

app.use('/', indexRt);
// API
app.use('/api/areas', areaRt);
app.use('/api/clients', clientRt);
app.use('/api/clientprofiles', clientProfileRt);
app.use('/api/profiles', profileRt);
app.use('/api/contacts', contactRt);
// Rendered
app.use('/areas', areasRendered);

app.get('/api', (req, res) => {
    res.send("API index");
});

const port = process.env.port || 8080;

app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});