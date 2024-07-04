const express = require('express')
const FeedbackController = require('../controller/feedbackController')
const router = express.Router()

router.route('/')
.post(FeedbackController.postFeedback)

router.route('/get')
.post(FeedbackController.getFeedback)

module.exports = router