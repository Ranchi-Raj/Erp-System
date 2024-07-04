const model = require('../models/attendence')

exports.getAttendence = async (req, res) => {
    console.log(req.body)
    const attendence = await model.find({username : req.body.username});
    res.json({
        status: 200,
        data: {
            attendence
        }
    })
}
exports.addAttendence = async (req, res) => {
    console.log(req.body)
    const attendence = await model.updateOne({username : req.body.username},req.body,{new : true});
    res.json({
        status: 200,
        data: {
            attendence
        }
    })
}