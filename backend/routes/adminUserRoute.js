const express = require('express')
const AdminUserController = require('../controller/adminUserController')
const router = express.Router()

router.route('/')
.post(AdminUserController.getAdminUser)

router.route('/add')
.post(AdminUserController.addAdminUser)

module.exports = router