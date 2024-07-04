import React from 'react'
import { useDispatch } from 'react-redux'
import { addSidebar } from '../../features/users/userSlice'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import {useSelector} from 'react-redux'
import axios from 'axios'
import { addUser } from '../../features/users/userSlice'
export default function Profile() {
    const dispatch = useDispatch()
    dispatch(addSidebar(1))
    const user1 = useSelector((state) => state.user.user)

    const [edit,setEdit] = React.useState(false)
    const [user, setUser] = React.useState({
        _id : user1.id,
        // name: '',
        // username: '',
        // dob: '',
        fatherName: '',
        motherName: '', 
        email: '',
        phone: '',
        address: '',
        gender: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const sendData = () =>{
        setUser(prev => ({
            ...prev,
            _id : user1._id
        }));

        axios.patch('/api/signup/profile',user).then((response) => {
            console.log("Send Successfully")
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
        setEdit(false)

        axios.post('/api/signup/login', {username : user1.username, password : user1.password}).then((response) => {
            const {__v,_id, ...user} = response.data.data.data
            dispatch(addUser({
                id : _id,
                ...user
              }))
        })

        setUser({
            _id : user1.id,
            // name: '',
            // username: '',
            // dob: '',
            fatherName: '',
            motherName: '', 
            email: '',
            phone: '',
            address: '',
            gender: ''
        })
    }

  return (
    <div className='p-0 m-0'>
      <Navbar/>
      <Sidebar/>

      {
        !edit ? 
        <div className='mt-20 ml-20 md:ml-12 text-sm md:text-lg xl:text-2xl'>
            <h1 className='text-4xl md:text-6xl bg-slate-600 rounded-xl'>Profile</h1>
            <button className='w-10 h-10 text-sm p-0 my-2 bg-red-700' onClick={() => setEdit(true)}>Edit</button>
            <div className='bg-green-600 p-5 rounded-xl'>
            <p>Name : {user1.name}</p>
            <p>Username : {user1.username}</p>
            <p className='break-words'>Date of Birth : {user1.dob.slice(0,10)}</p>
            <p>Father Name : {user1.fatherName}</p>
            <p>Mother Name : {user1.motherName}</p>
            <p>Email : {user1.email}</p>
            <p>Phone : {user1.phone}</p>
            <p>Address : {user1.address}</p>
            <p>Gender : {user1.gender}</p>
            {
                user1.course &&
                <div>   
                <p>Branch : {user1.course.branch}</p>
                <p>Year : {user1.course.year}</p>
                <p>Semester : {user1.course.semester}</p>
                </div>
            }
            </div>
        </div> 

        :

        <div className='mt-20 ml-16'>
            <form>
            <div className='text-xl flex flex-col justify'>
                <p ><span className='font-bold'>Name:</span> {user1.name}</p>
                <p><span className='font-bold'>Username:</span> {user1.username}</p>
                <p className='break-words'><span className='font-bold'>DOB:</span> {user1.dob.slice(0, 10)}</p>
            </div>
            <div className="flex flex-col md:flex-row md:my-2">
                <label>Father Name:</label>
                <input
                    type="text"
                    name="fatherName"
                    value={user.fatherName}
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col md:flex-row md:my-2">
                <label>Mother Name:</label>
                <input
                    type="text"
                    name="motherName"
                    value={user.motherName}
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col md:flex-row md:my-2">
                <label className='mr-4'>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col md:flex-row md:my-2">
                <label className='mr-4'>Phone:</label>
                <input
                    type="tel"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col md:flex-row md:my-2">
                <label className='mr-4'>Address:</label>
                <input
                    type="text"
                    name="address"
                    value={user.address}
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col md:flex-row md:my-2">
                <label className='mr-4'>Gender:</label>
                <input
                    type="text"
                    name="gender"
                    value={user.gender}
                    onChange={handleChange}
                />
            </div>
            <button className='bg-red-700' type="submit" onClick={sendData}>Submit</button>
        </form>
        </div>
      }
    </div>
  )
}
