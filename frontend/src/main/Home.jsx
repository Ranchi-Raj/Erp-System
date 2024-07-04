import { useSelector } from "react-redux"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

export default function Home() {
  const user = useSelector((state) => state.user.user)
  return (
    <div>
      <Navbar/>
      <Sidebar/>
     <p className="mt-24 text-sm ml-20 md:text-3xl"> Welcome {user.name}</p>

    </div>
  )
}

