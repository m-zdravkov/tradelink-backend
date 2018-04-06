const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AreaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    sublocations: {
        type: [String],
        required: false
    }
});

const Area = module.exports = mongoose.model('areas', AreaSchema);

module.exports.getAreas = (callback, limit) => {
    Area.find(callback).limit(limit);
}

module.exports.getAreaById = (id, callback) => {
    Area.findById(id, callback);
}

module.exports.addArea = (object, callback) => {
    Area.create(object, callback);
}