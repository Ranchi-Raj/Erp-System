const express = require('express')
const AttendenceController = require('../controller/attendenceController')
const router = express.Router()

router.route('/')
.post(AttendenceController.getAttendence)//Done

router.route('/add')
.patch(AttendenceController.addAttendence)

module.exports = router