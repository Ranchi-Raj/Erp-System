import React from 'react'
import AdminSidebar from './adminSidebar'
import Navbar from "../main/Navbar"
import { useDispatch, useSelector } from 'react-redux'
import { addSidebar } from '../../features/users/userSlice'
import axios from 'axios'
export default function AdminGrading() {
    const dispatch = useDispatch();
    dispatch(addSidebar(3))
    const user = useSelector((state) => state.user.user)

      const [formData, setFormData] = React.useState({
          name: '',
          topic: '',
          description: '',
          data : Date.now(),
          professor : user.name
      });
    
      const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
              ...formData,
              [name]: value
          });
      };
  
      const handleSubmit = (e) => {
          e.preventDefault();
          console.log('Form submitted:', formData);
          // Send Data to backend

          axios.post('/api/tasks',formData).then((response) => {
            console.log(response.data);
          }).catch((error) => {
            console.error(error);
          });
          setFormData({
              name: '',
              topic: '',
              description: '',
              data : Date.now(),
              professor : user.name
          });
      }  
  return (
    <div>
      <Navbar/>
      <AdminSidebar/>

      <div className='mt-20 ml-20'>
        <h1 className='text-xl sm:text-2xl md:text-4xl font-semibold mb-12'>UPLOAD TASKS</h1>
      <div className="form-container">
            <form onSubmit={handleSubmit} className='flex flex-col'>
              <div className='my-2 flex flex-col md:flex-row'>
                <label htmlFor="name" className='mr-2'>Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
              </div>
                <div className='my-2 flex flex-col md:flex-row'>
                <label htmlFor="topic" className='mr-2'>Topic:</label>
                <input
                    type="text"
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    required
                />
                </div>
                <div className='my-2 flex flex-col md:flex-row'>
                <label htmlFor="description" className='mr-2'>Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className='min-w-20 sm:min-w-48 md:min-w-72 min-h-24'
                    required
                ></textarea>
                </div>
               <div className='flex justify-center'>
                <button type="submit" className='w-1/2 p-1 sm:p-2 text-sm mt-4 bg-blue-800'>Submit</button>
                </div> 
            </form>
  
      </div>
    </div>
    </div>
  )
}
