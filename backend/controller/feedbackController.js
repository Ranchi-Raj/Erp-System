const Feedback = require('../models/feedback')

exports.getFeedback = async (req, res) => {
    const feedback = await Feedback.find({name : req.body.name});
    res.json({
        status: 200,
        data: {
            feedback
        }
    })
}
exports.postFeedback = async (req, res) => {
    const feedback = await Feedback.create(req.body);
    res.json({
        status: 200,
        data: {
            feedback
        }
    })
}

