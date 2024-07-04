const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    subject : {
        type : Array,
        required : true
    }
});

const Model = mongoose.model('Attendence', schema);
module.exports = Model;