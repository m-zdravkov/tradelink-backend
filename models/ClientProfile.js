const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientProfileSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('clientProfiles', ClientProfileSchema);