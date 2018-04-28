let models = require('./modelsLoader');
let express = require('express');
let router = express.Router();
let requireUncached = require('require-uncached');

/**
 * Loads routes into the app. Include router middleware here.
 * @param {Express} app 
 */
module.exports = (app) => {
    let Index = require('../routes/indexRouter');
    let Auth = require('../routes/authRouter');
    let Area = require('../routes/areaRouter');
    let Client = require('../routes/clientRouter');
    let ClientProfile = requireUncached('../routes/crudRouter')(models.ClientProfile);
    let Profile = requireUncached('../routes/crudRouter')(models.Profile);
    let Contact = requireUncached('../routes/crudRouter')(models.Contact);

    // Rendered
    let IndexRendered = require('../routes/rendered/renderedIndexRouter');
    let AreasRendered = require('../routes/rendered/renderedAreaRouter');
    
    app.use('/api', Index);
    app.use('/api', Auth);
    app.use('/api/areas', Area);
    app.use('/api/clients', Client);
    app.use('/api/clientprofiles', ClientProfile);
    app.use('/api/profiles', Profile);
    app.use('/api/contacts', Contact);

    // Rendered
    app.use('/', IndexRendered);
    app.use('/areas', AreasRendered);

    // The routers are exported, if needed.
    return {
        Index : Index,
        Auth : Auth,
        Area : Area,
        Client : Client,
        ClientProfile : ClientProfile,
        Profile : Profile,
        Contact : Contact
    }
};