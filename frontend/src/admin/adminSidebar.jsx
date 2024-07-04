// import React from 'react'
import { Link } from "react-router-dom"
import {useSelector} from 'react-redux'
import '../main/main.css'
export default function AdminSidebar() {

    const sidebar = useSelector((state) => state.user.sidebar)

  return (
      <div className="fixed z-9 top-16 left-0 h-full w-3/12 sm:w-3/12 md:w-2/12 bg-slate-500 flex flex-col text-white">
      
        {
            sidebar !== 1 ? <Link to='/adminAttendence' className="hover-link text-sm md:text-md md:text-xl height-2/12 mt-8 py-8 sd:py-8 text-current hover:text-black">Attendence</Link>
            : <Link className="text-sm md:text-md md:text-xl height-2/12 mt-8 py-8 sd:py-8  text-black hover:text-black">Attendence</Link>
        }

        {
          sidebar !== 2 ? <Link to='/adminFeedback' className="hover-link text-sm md:text-md md:text-xl height-2/12 mt-8 py-8 sd:py-8 text-current hover:text-black">Feedback</Link>
          : <Link className="text-sm md:text-md md:text-xl height-2/12 mt-8 py-8 sd:py-8  text-black hover:text-black">Feedback</Link>
        }

        {
          sidebar !== 3 ? <Link to='/adminGrading' className="hover-link text-sm md:text-md md:text-xl height-2/12 mt-8 py-8 sd:py-8 text-current hover:text-black">Grading</Link>
          : <Link className="text-sm md:text-md md:text-xl height-2/12 mt-8 py-8 sd:py-8  text-black hover:text-black">Grading</Link>
        }
        
    </div>
  )
}
