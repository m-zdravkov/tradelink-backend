const mongoose = require('mongoose');

const Repository = (modelName) => {
    this.model = mongoose.model(modelName);
};

Repository.prototype.getAll = (callback, limit) => {
    this.model.find(callback).limit(limit);
};

module.exports = Repository;