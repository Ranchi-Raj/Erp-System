const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    topic: {
        type: String,
        default: false
    },
    description: {
        type: String,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    professor : {
        type: String
    }
})

const Model = mongoose.model('Task', Schema);

module.exports = Model