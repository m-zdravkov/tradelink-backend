let express = require('express');
let path = require('path');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let exphbs = require('express-handlebars');
let requireUncached = require('require-uncached');

let app = module.exports = express();

// Get the environment setting from the cli
app.environment = 'dev';

/*process.argv.forEach(function (val, index, array) {
    if(val.substring(0,6) === "--env=") {
        app.environment = val.slice(6);
    }
});*/
if(process.env.env !== '')
    app.environment = process.env.env;

if(app.environment === '')
    app.environment = 'dev';

console.log(`App running in '${app.environment}' environment.`);

// Models
let Client = require('./models/Client');
let Area = require('./models/Area');
let Profile = require('./models/Profile');
let ClientProfile = require('./models/ClientProfile');
let Contact = require('./models/Contact');

let {
    truncate,
    stripTags,
    formatDate,
    select,
    editIcon
} = require('./helpers/hbs');

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
let indexRt = require('./routes/indexRouter');
let areaRt = require('./routes/areaRouter');
let clientRt = require('./routes/clientRouter');
let clientProfileRt = requireUncached('./routes/crudRouter')(ClientProfile);
let profileRt = requireUncached('./routes/crudRouter')(Profile);
let contactRt = requireUncached('./routes/crudRouter')(Contact);
// Rendered
let indexRendered = require('./routes/rendered/renderedIndexRouter');
let areasRendered = require('./routes/rendered/renderedAreaRouter');

// Middleware

app.use('/api', indexRt);
// API
app.use('/api/areas', areaRt);
app.use('/api/clients', clientRt);
app.use('/api/clientprofiles', clientProfileRt);
app.use('/api/profiles', profileRt);
app.use('/api/contacts', contactRt);
// Rendered
app.use('/', indexRendered);
app.use('/areas', areasRendered);

app.get('/api', (req, res) => {
    res.send("API index");
});

app.port = process.env.port || 8080;

app.listen(app.port, () => {
    console.log(`Server started on port ${app.port}...`);
});