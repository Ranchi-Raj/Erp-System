import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { addSidebar } from "../../features/users/userSlice";
import axios from "axios";
import { addUser } from "../../features/users/userSlice";
export default function Course() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.user)
    dispatch(addSidebar(2))

    const [formData, setFormData] = React.useState({
      _id : user.id,
      branch: '',
      year: '',
      semester: ''

    });
  
    React.useEffect(() => {
      if(user.course)
        {
          setFormData(user.course)
        }
    },[])
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    };

    const submit = (e) => {
      e.preventDefault();
      axios.patch('/api/signup/addCourse', formData).then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.error(error);
      })

      axios.post('/api/signup/login', {username : user.username, password : user.password}).then((response) => {
        const {__v,_id, ...user} = response.data.data.data
        dispatch(addUser({
            id : _id,
            ...user
          }))

      })
      setFormData({
        _id : user.id,
        branch: '',
        year: '',
        semester: ''
      });
    }
  return (
    <div>
      <Navbar/>
      <Sidebar/>

      <div className="mt-20 ml-16">
        <h1 className="my-4">COURSE</h1>
      <form className="flex flex-col space-y-4 p-4">
      <div className="flex flex-col md:flex-row items-center">
        <label className="mr-2">Branch:</label>
        <select
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="" disabled>Select your branch</option>
          <option value="Mechanical">Mechanical</option>
          <option value="Electrical">Electrical</option>
          <option value="Electronics">Electronics</option>
          <option value="Metallurgy">Metallurgy</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Civil">Civil</option>
        </select>
      </div>

      {/* <div className="flex flex-col md:flex-row items-center">
        <label className="mr-2">Year:</label>
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-md"
        />
      </div> */}

      <div className="flex flex-col md:flex-row items-center">
        <label className="mr-2">Year (1-5):</label>
        <select
          name="year"
          value={formData.year}
          onChange={handleChange}
          style={{ maxHeight: '150px', overflowY: 'scroll' }}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="" >Year</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <label className="mr-2">Semester:</label>
        <select
          name="semester"
          value={formData.semester}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="" >Semester</option>
          {[...Array(10)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-center">
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-md w-2/4" onClick={submit}>Submit</button>
      </div>
    </form>
      </div>
    </div>
  )
}
