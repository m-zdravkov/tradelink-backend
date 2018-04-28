module.exports = () => {
    let Client = require('./models/Client');
    let Area = require('./models/Area');
    let Profile = require('./models/Profile');
    let ClientProfile = require('./models/ClientProfile');
    let Contact = require('./models/Contact');

    return {
        Client : Client,
        Area : Area,
        Profile : Profile,
        ClientProfile : ClientProfile,
        Contact : Contact
    }
};