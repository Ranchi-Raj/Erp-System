import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useDispatch,useSelector } from "react-redux";
import { addSidebar } from "../../features/users/userSlice";
import axios from "axios";
import React from "react";
export default function Attendence() {
    const dispatch = useDispatch();
    dispatch(addSidebar(3))
    const user = useSelector((state) => state.user.user)
    const [attendence, setAttendence] = React.useState({username : "" , subject : []})

    React.useEffect(() => {
      axios
        .post("/api/attendence", { username: user.username })
        .then((response) => {
          console.log("Attendence ",response.data.data.attendence)
          setAttendence(response.data.data.attendence[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  return (
    <div>
      <div>
        <Navbar />
        <Sidebar />
      </div>
        <div className="mt-20 ml-16">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">Attendence</h1>
        <p className="my-4 text-md sm:text-xl md:text-2xl">Student : {user.name}</p>
        <div className="bg-gray-700 p-2 rounded-xl">
        {
            attendence.subject.map((sub) => {
                return(
                    <div key={sub.name} className="flex justify-between my-2">
                        <p>{sub.name}</p>
                        <p>{sub.attended} / {sub.total}</p>
                    </div>
                )
            })
        }
        </div>
        </div>

    </div>
  )
}
