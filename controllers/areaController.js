let mongoose = require('mongoose');
let Area = require('../models/Area');


module.exports = {
    getAreas : (callback, limit) => {
        Area.find(callback).limit(limit);
    },

    getAreaById : (id, callback) => {
        Area.findById(id, callback);
    },

    addArea : (object, callback) => {
        Area.create(object, callback);
    },

    updateArea : (id, object, options, callback) => {
        let query = {_id:id};
        let update = {
            name: object.name,
            type: object.type,
            description: object.description,
            sublocations: object.sublocations
        };
        Area.findOneAndUpdate(query, update, options, callback);
    },

    deleteArea : (id, options, callback) => {
        Area.findByIdAndRemove(id,options,callback);
    }
};
