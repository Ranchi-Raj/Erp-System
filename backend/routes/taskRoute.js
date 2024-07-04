const express = require('express')
const TaskController = require('../controller/taskController')
const router = express.Router()

router.route('/')
.get(TaskController.getTasks)
.post(TaskController.addTask)

router.route('/filter')
.post(TaskController.getFilteredTasks)

router.route('/completed')
.post(TaskController.getCompletedTasks)

module.exports = router