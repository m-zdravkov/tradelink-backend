const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
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
    lastChanged: {
        type: Date,
        required: false
    },
    Admins: {
        type: [Schema.ObjectId],
        required: false //TODO: change to true
    },
    Contacts: {
        type: [Schema.ObjectId],
        required: false       
    },
    Trade: {
        type: String,
        required: false
    },
    TradeTags: {
        type: [Schema.ObjectId],
        required: false
    },
    Needs: {
        type: String,
        required: false
    },
    NeedsTags: {
        type: [Schema.Types.ObjectId],
        required: false
    },
    Areas: {
        type: [Schema.Types.ObjectId],
        required: false
    }

});

module.exports = mongoose.model('profiles', ProfileSchema);