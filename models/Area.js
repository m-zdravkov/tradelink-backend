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

module.exports.updateArea = (id, object, options, callback) => {
    let query = {_id:id};
    let update = {
        name: object.name,
        type: object.type,
        description: object.description,
        sublocations: object.sublocations
    };
    Area.findOneAndUpdate(query, update, options, callback);
}

module.exports.deleteArea = (id, options, callback) => {
    Area.findByIdAndRemove(id,options,callback);
}