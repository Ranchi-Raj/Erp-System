const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  dob: {
    type: Date,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  fatherName: {
    type: String,
    default: "Not Available"
  },
  motherName: {
    type: String,
    default: "Not Available"
  },
  address: {
    type: String,
    default: "Not Available"
  },
  phone: {
    type: String,
    default: "Not Available"
  },
  gender: {
    type: String,
    default: "Not Available"
  },
  email: {
    type: String,
    default: "Not Available"
  },
  course :{
    type : Object,
    default : {}
  },
  tasks :{
    type : [{
        type : String,
        unique : true
    }],
    default : [''],

    }
  
});

// Create a model from the schema
const User = mongoose.model('User', UserSchema);

module.exports = User;
