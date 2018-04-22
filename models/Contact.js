const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    id: {
        type: String,
        required: true
    },
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

mongoose.model('profiles', ProfileSchema);