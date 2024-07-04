import React from 'react'
import AdminSidebar from './adminSidebar'
import Navbar from "../main/Navbar"
import { useDispatch,useSelector } from 'react-redux'
import { addSidebar } from '../../features/users/userSlice'
import axios from 'axios'
export default function AdminFeedback() {
    const [feedback,setFeedback] = React.useState([])
    const user = useSelector((state) => state.user.user)
    const dispatch = useDispatch();
    dispatch(addSidebar(2));

    React.useEffect(() => {
        axios.post('/api/feedback/get',{name : user.name}).then((response) => {
            console.log(response.data.data.feedback)
           setFeedback(response.data.data.feedback)
        }).catch((error) => {
            console.log(error)
        })
        
    },[])

  return (
    <div>
      <Navbar/>
      <AdminSidebar/>

      <div className='mt-20'>
        <h1 className='text-xl sm:text-2xl md:text-4xl font-bold ml-20'>Feedback</h1>
        <div className='flex flex-col justify-center items-center mt-12 ml-20'>
            {
                feedback.map((data) => {
                    return(
                        <div key={data._id} className='flex flex-col justify-center items-center bg-slate-600 p-4 rounded-xl'>
                            <div className='flex justify-between'>
                                <p className='text-lg sm:text-xl md:text-xl font-semibold mr-4'>Student ID :</p>
                                <p className='text-lg sm:text-xl md:text-xl'>{data.student}</p>
                            </div>
                            <div className='flex '>
                                <p className='text-lg sm:text-xl md:text-xl font-semibold mr-4'>Content Ratings:</p>
                            <p className='text-lg sm:text-xl md:text-xl'>{data.content}</p>
                            </div>
                            <div className='flex'>
                                <p className='text-lg sm:text-xl md:text-xl font-semibold mr-4'>Teach Ratings:</p>
                            <p className='text-lg sm:text-xl md:text-xl'>{data.teach}</p>
                            </div>
                            <div className='flex'>
                                <p className='text-lg sm:text-xl md:text-xl font-semibold mr-4'>Description:</p>
                            <p className='text-lg sm:text-xl md:text-xl'>{data.description}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
      </div>
    </div>
  )
}
