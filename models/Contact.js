const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    text: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('contacts', ContactSchema);