const express = require('express')
const UserController = require('../controller/userController')
const router = express.Router()

router.route('/')
.post(UserController.createUser)

router.route('/login')
.post(UserController.getAllUsers)

router.route('/profile')
.patch(UserController.updateUser)

router.route('/addCourse')
.patch(UserController.addCourse)

router.route('/completeTask')
.patch(UserController.completeTask)

module.exports = router;