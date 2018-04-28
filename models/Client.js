const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: false //TODO: set to true
    },
    salt: {
        type: String,
        required: false //TODO: set to true
    },
    token: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('clients', ClientSchema);