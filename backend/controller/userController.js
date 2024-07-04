const mongoose = require('mongoose');
const User = require('../models/user');

exports.createUser = async (req, res) => {
try
{
    const { name, username, dob, password } = req.body;

    const data = await User.create({ name, username, dob, password });
    res.json({
        status: 200,
        data: {
            data
        }
    });
    console.log("User resgistered");
}
catch(err){
    console.log("User not resgistered");
}
}

exports.getAllUsers = async (req, res) => {
    
    try{
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body)
    const data = await User.findOne({ username : username, password :password });
    
    res.json({
        status: 200,
        data: {
            data
        }
    });
    }
    catch(err){
        console.log(err)
        console.log("User not resgistered");
    }
}

exports.updateUser = async (req, res) => {

    const user = req.body;
    console.log(user)
    const data = await User.updateOne({ _id : user._id }, user, { new : true });
    console.log(data)
    if(data){
    res.json({
        status: 200,
        data: {
            data
        }
    });
    }
    else
    {
        res.json({
            status: 400,
            data: {
                data
            }
        });
    }
}

exports.addCourse = async (req, res) => {
    const user = req.body;
    console.log(user)
    const {_id, ...data2} = user
    const course  = { course : data2}
    const data = await User.updateOne({ _id : user._id }, course, { new : true });
    console.log(data)
    if(data){
    res.json({
        status: 200,
        data: {
            data
        }
    });
    }
    else
    {
        res.json({
            status: 400,
            data: {
                data
            }
        });
    }
}

exports.completeTask = async (req, res) => {
    const user = req.body;
    console.log(user)

    const data = await User.updateOne({ username : user.username }, {$push : {tasks : user.taskid}}, { new : true });
    res.json({
        status : 200,
        data : {
            data
        }
    })
}