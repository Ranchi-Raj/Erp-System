import React from 'react'
import AdminSidebar from './adminSidebar'
import Navbar from "../main/Navbar"
import { useDispatch } from 'react-redux'
import { addSidebar } from '../../features/users/userSlice'
import axios from 'axios'
export default function AdminAttendence() {
    const dispatch = useDispatch();
    dispatch(addSidebar(1))
    const subjectsArray = ['Physics', 'Chemistry', 'Maths', 'Mechanics', 'Electrical', 'Electronics', 'Subject1', 'Subject2', 'Subject3'];
    const [active , setActive] = React.useState(false)
    const [username, setUsername] = React.useState("");
    const [formData, setFormData] = React.useState({
      // username: '',
      name: '',
      attended : '',
      total : '',
      // daysAttended: '',
      // totalDays: ''
    });

    const [attendence, setAttendence] = React.useState()

    const fetchUser = async () => {
      axios
      .post("/api/attendence", { username: username })
      .then((response) => {
        console.log("Attendence ",response.data.data.attendence[0])
        const {__v,_id, ...toSend} = response.data.data.attendence[0]
        setAttendence(toSend);
      })
      .catch((error) => {
        console.log(error);
      });
      
      setActive(!active)
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form Data:', formData);
      attendence.subject = attendence.subject.filter((element) => element.name !== formData.name);
      attendence.subject.push(formData); 
      // Send form data to backend
    //  attendence.subject.unshift(0)
      
      axios.patch("/api/attendence/add", attendence).then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.error(error);
      });

      // Reset form fields
    
      setFormData({
        // username: '',
        name: '',
        attended: '',
        total: ''
      });
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };



  return (
    <div>
      <Navbar/>
      <AdminSidebar/>

      <div className='mt-20 ml-20'>
        <h1 className='text-xl sm:text-2xl md:text-4xl font-semibold mb-12'>ATTENDENCE</h1>
      <form onSubmit={handleSubmit}>
      <div className='flex flex-col sm:flex-row'>
        <label>
          Username:
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='ml-3'
          />
      </div>

        <button onClick={fetchUser} className='text-sm p-2 mt-3'>Search</button>

     { active && <div>
      <div className='mt-8 flex flex-col sm:flex-row mb-4'>
        <label>
          Subject:
          </label>
          <select name="name" value={formData.name} className='p-1 rounded-lg ml-3' onChange={handleInputChange}>
            <option value="">Select Subject</option>
            {subjectsArray.map((name, index) => (
              <option key={index} value={name}>{name}</option>
            ))}
          </select>
        
      </div>
    { 

    formData.name &&
      <div>
          <div>
            <label>
              Days Attended:
              <input
                type="number"
                name="attended"
                // value={formData.daysAttended}
                value = {formData.attended}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <div>
            <label>
              Total Days:
              <input
                type="number"
                name="total"
                // value={formData.totalDays}
                value = {formData.total}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <button type="submit" onClick={handleSubmit}>Submit</button>
          </div>
      }
    </div>}
    </form>

      </div>
    </div>
  )
}
