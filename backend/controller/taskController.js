const Task = require('../models/task')

exports.getTasks = async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks)
    res.json({
        status: 200,
        data: {
            tasks
        }
    })
}
exports.addTask = async (req, res) => {
    const task = await Task.create(req.body);
    res.json({
        status: 200,
        data: {
            task
        }
    })
}

exports.getFilteredTasks = async (req, res) => {

    const tasks = await Task.find({id : {$in : req.body}});
    res.json({
        status: 200,
        data: {
            tasks
        }
    })
}

exports.getCompletedTasks = async (req, res) => {
    const tasks = await Task.find({id : {$nin : req.body}});

    res.json({
        status :200,
        data : {
            tasks
        }
    })
}

