const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const cors = require('cors')
const UserRoute = require('./routes/userRoute')
const TaskRouter = require('./routes/taskRoute')
const FeedbackRouter = require('./routes/feedbackRoute')
const AttendenceRouter = require('./routes/attendenceRouter')
const AdminRoute = require('./routes/adminUserRoute')
const app = express()

app.use(express.json())

app.use(cors(
    {
        origin : ["https://erp-system-api.vercel.app"],
        methods : ["POST", "GET" , "PATCH"],
        credentials : true
    }
))

// DATABASE CONNECTION
const url = process.env.DATABASE || "mongodb+srv://rajadi792:30102003@cluster0.oueq7ai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url).then(() => {
    console.log("DataBase Connected Successfuly")
}).catch((err) => {
    console.log(err)
})
app.get("/", (req, res) => {
    res.send("Hello World")
})
// ROUTES
app.use('/api/signup', UserRoute)
app.use('/api/tasks', TaskRouter)
app.use('/api/feedback', FeedbackRouter)
app.use('/api/attendence', AttendenceRouter)
app.use('/api/admin', AdminRoute)

// STARTING THE SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
