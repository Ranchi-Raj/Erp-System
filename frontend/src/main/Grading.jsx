import React from 'react'
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import {useDispatch} from "react-redux";
import {addSidebar} from "../../features/users/userSlice"
import axios from "axios"
import {useSelector} from "react-redux"
export default function Grading() {
  const[tab,setTab] = React.useState(0)
  // const sidebar = useSelector((state) => state.user.sidebar)
  const dispatch = useDispatch()
  dispatch(addSidebar(4))

  const [tasks, setTasks] = React.useState([])
  const[view,setView] = React.useState("")
  const user = useSelector((state) => state.user.user)

  const [completeTasks, setCompleteTasks] = React.useState([])

  React.useEffect(() => {
    axios.post('/api/tasks/completed',user.tasks).then((response) => {
      setTasks(response.data.data.tasks)
      refresh()
      console.log(typeof tasks)
      console.log(tasks)
    }).catch((error) => {
      console.error(error)
    })
  },[])

  const refresh = () => {
    axios.post('/api/tasks/completed',user.tasks).then((response) => {
      setTasks(response.data.data.tasks)
      console.log(typeof tasks)
      console.log(tasks)
    }).catch((error) => {
      console.error(error)
    })
  }
    // const refreshTasks = () => {
    //   axios.post('/api/signup/login', {username : user.username, password : user.password}).then((response) => {
    //     const {tasks, ...user} = response.data.data.data
    //     dispatch(addTasks(tasks))
    //   })
    // }
  const complete = (id) => {
    console.log(user._id ," ---", user.id)
    axios.patch('/api/signup/completeTask', {taskid : id , username : user.username}).then((response) => {
      console.log(response.data)
      refresh()
    }).catch((error) => {
      console.error(error)
    })
    refresh()
  }
  React.useEffect(() => {
    axios.post('/api/tasks/filter', user.tasks).then((response) => {
      setCompleteTasks(response.data.data.tasks)
      refresh()
    }).catch((error) => {
      console.error(error)
    })
  },[tab])

  return (
    <div>
      <Navbar/>
      <Sidebar/>

    <div className='setWidth'>
        <div className=' flex justify-evenly mt-20'>
        <button className='noeffect hover-link bg-transparent text-sm md:text-2xl' onClick={() => setTab(0)}>Assigned</button> 
        <button className='noeffect hover-link bg-transparent text-sm md:text-2xl' onClick={() => setTab(1)}>Completed</button>
        </div>
        <div>
          <div>
          {
            tab === 0 && 
            <div className='mt-10 ml-8 sm:ml-2'>
                
              {
                tasks.map((task) => {
                  return (
                    <div key={task._id}>
                    <div className='mt-4 py-4 flex flex-col sm:flex-row justify-between p-2 rounded-lg bg-slate-600 text-sm md:text-xl'>
                      <div>
                      <p>{task.name}</p>
                      <p>{task.topic}</p>
                      </div>
                      <div>
                      <p>{task.date.slice(0,10)}</p>
                      <button className='p-0 sm:py-1 sm:px-2 text-sm' onClick={() => setView(task._id)}>View more</button>
                      </div>
                     
                    </div>
                    {
                        (view === task._id) &&
                          <div>
                            <p className='bg-green-800 py-3'>{task.description}</p>
                            <button onClick={complete(view)} className='text-sm mx-2'>Done</button>
                            <button onClick={() => setView("")} className='text-sm'>X</button>
                          </div>
                      }
                    </div>
                  )
                })
              }
            </div>
          }
          </div>

          <div>
            {
              tab === 1 &&

              <div className='mt-10 ml-8 sm:ml-2'>
                
              {
                completeTasks.map((task) => {
                  return (
                    <div key={task._id}>
                    <div className='mt-4 py-4 flex flex-col sm:flex-row justify-between p-2 rounded-lg bg-slate-600 text-sm md:text-xl'>
                      <div>
                      <p>{task.name}</p>
                      <p>{task.topic}</p>
                      </div>
                      <div>
                      <p>{task.date.slice(0,10)}</p>
                      <button className='p-0 sm:py-1 sm:px-2 text-sm' onClick={() => setView(task._id)}>View more</button>
                      </div>
                     
                    </div>
                    {
                        (view === task._id) &&
                          <div>
                            <p className='bg-green-800 py-3'>{task.description}</p>
                            {/* <button onClick={complete(view)} className='text-sm mx-2'>Done</button> */}
                            <button onClick={() => setView("")} className='text-sm'>X</button>
                          </div>
                      }
                    </div>
                  )
                })
              }
            </div>
            }
          </div>
        </div>
        <button className='bg-blue-800 mt-5' onClick={refresh}>Refresh</button>
        
        </div>
        </div>
      
   
  )
}
