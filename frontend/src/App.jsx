import './App.css'
import Login from './components/Login'
import {Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Home from './main/Home'
import Feedback from './main/Feedback'
import Course from './main/Course'
import Profile from './main/Profile'
import Grading from './main/Grading'
import Attendence from './main/Attendence'
import AdminHome from './admin/adminHome'
import AdminAttendence from './admin/adminAttendence'
import AdminFeedback from './admin/adminFeedback'
import AdminGrading from './admin/adminGrading'
function App() {

  return (
    <div>
     <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path='/feedback' element={<Feedback/>}></Route>
        <Route path='/courseRegistration' element={<Course/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path = '/grading' element={<Grading/>}/>
        <Route path = '/attendence' element={<Attendence/>}/>
        <Route path = '/admin' element={<AdminHome/>}/>
        <Route path = '/adminAttendence' element={<AdminAttendence/>}/>
        <Route path = '/adminFeedback' element={<AdminFeedback/>}/>
        <Route path = '/adminGrading' element={<AdminGrading/>}/>

     </Routes>
    </div>
  )
}

export default App
