let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AreaSchema = new Schema({
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
        type: [mongoose.Schema.Types.ObjectId],
        required: false
    }
});

module.exports = mongoose.model('areas', AreaSchema);