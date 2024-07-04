const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    student : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true,
    },
    teach :{
        type : Number,
        required : true
    },
    content : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        default : "Not Available"
    }
})

const Modal = mongoose.model('Feedback', Schema);
module.exports = Modal;