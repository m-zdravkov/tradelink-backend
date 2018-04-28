let express = require('express');
let path = require('path');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let exphbs = require('express-handlebars');
let passport = require('passport');

let app = module.exports = express();

// Get the environment setting from the CLI
require('./helpers/environmentSetter')(app);

let {
    truncate,
    stripTags,
    formatDate,
    select,
    editIcon
} = require('./helpers/hbs');

require('./helpers/databaseHelper')(app);

/*
// Connect to mongoose database
let dbConfig = require('./dbconfig.json');
let dbUrl = '';

switch(app.environment) {
    default:
    case 'dev': dbUrl = 'mongodb://localhost/tradelink-dev'; break;
    case 'test': dbUrl = 'mongodb://localhost/tradelink-bll-dev'; break;
}

mongoose.connect(dbUrl)
.then(() => console.log(`MongoDB connected @ ${dbUrl} ...`))
.catch(err => console.log(err));

let db = mongoose.connection;
*/
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

// Routes and router middleware
require('./helpers/routersLoader')(app);

// Port
app.port = process.env.port || 8080;

// Start server
app.listen(app.port, () => {
    console.log(`Server started on port ${app.port}...`);
});