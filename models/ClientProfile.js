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
    lastChanged: {
        type: Date,
        required: false
    },
    Admins: {
        type: [mongoose.Types.ObjectId],
        required: false //TODO: change to true
    },
    Contacts: {
        type: [mongoose.Types.ObjectId],
        required: false       
    },
    Trade: {
        type: string,
        required: false
    },
    TradeTags: {
        type: [mongoose.Types.ObjectId],
        required: false
    },
    Needs: {
        type: string,
        required: false
    },
    NeedsTags: {
        type: [mongoose.Types.ObjectId],
        required: false
    },
    Areas: {
        type: [mongoose.Types.ObjectId],
        required: false
    }
});

mongoose.model('profiles', ProfileSchema);