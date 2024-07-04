const modal = require('../models/adminUser')

exports.getAdminUser = async (req, res) => {
    const adminUser = await modal.find({username : req.body.username, password : req.body.password});
    res.json({
        status: 200,
        data: {
            adminUser
        }
    })
}

exports.addAdminUser = async (req, res) => {
    const adminUser = await modal.create(req.body);
    res.json({
        status: 200,
        data: {
            adminUser
        }
    })
}