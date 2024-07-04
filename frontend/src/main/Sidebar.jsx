import { Link } from "react-router-dom"
import './main.css'
import { useSelector } from "react-redux"
export default function Sidebar() {
  let sidebarState = useSelector((state) => state.user.sidebar)
  console.log(sidebarState)
  return (
    <div className="fixed z-9 top-16 left-0 h-full w-3/12 sm:w-3/12 md:w-2/12 bg-slate-500 flex flex-col text-white ">
      {
        sidebarState!==1 ? <Link to='/profile' className="hover-link text-sm md:text-md md:text-xl height-2/12 mt-8 py-8 sd:py-8 text-current hover:text-black">Student Profile</Link>
        : <Link className="text-sm md:text-md md:text-xl height-2/12 mt-8 py-8 sd:py-8  text-black hover:text-black">Student Profile</Link>
      }
      {
        sidebarState!==2 ? <Link to ='/courseRegistration' className="break-words hover-link text-sm md:text-xl py-6 sd:py-8 text-current hover:text-black">Course Registration</Link>
      : <Link className="break-words text-sm md:text-xl py-6 sd:py-8  text-black hover:text-black">Course Registration</Link>
      
      }
      {
        sidebarState !== 3 ? <Link to='/attendence' className="break-words hover-link text-sm md:text-xl py-6 sd:py-8 text-current hover:text-black">Attendence</Link>
        : <Link className="break-words text-sm md:text-xl py-6 sd:py-8 text-black hover:text-black">Attendence</Link>
      
      }

      {
        sidebarState !==4 ?  <Link to='/grading' className="hover-link text-sm md:text-xl py-6 sd:py-8 text-current hover:text-black">Grading System</Link>
      : <Link className=" text-sm md:text-xl py-6 sd:py-8  text-black hover:text-black">Grading System</Link>
      }
     
      {sidebarState !== 5 ? 
      <Link to="/feedback" className="hover-link text-sm md:text-xl py-6 sd:py-8 text-current  hover:text-black">Feedback</Link>
      :<Link className=" text-sm md:text-xl py-6 sd:py-8  text-black hover:text-black">Feedback</Link>
      }
      <Link className="hover-link text-sm md:text-xl py-6 sd:py-8 text-current hover:text-black">Gymkhana</Link>
    </div>
  )
}

