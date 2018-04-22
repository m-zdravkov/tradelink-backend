const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientProfileSchema = new Schema({
    id: {
        type: String,
        required: true
    },
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

mongoose.model('profiles', ProfileSchema);