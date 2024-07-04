const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    name :{
        type : String,
        required : true
    },
    dob :{
        type : Date,
        required : true
    }
});

const Modal = mongoose.model('AdminUser', Schema);
module.exports = Modal;