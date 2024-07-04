import { useState } from 'react';
import './SignUp.css';
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    dob: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const checker = formData.username.includes('@admin')
    if(!checker){
      
      axios.post('/api/signup', formData).then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.error(error);
      })
    }
    else{
      axios.post('/api/admin/add',formData).then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.error(error);
      })
    }
     console.log('Form data submitted:', formData);
    navigate('/')
    setFormData({
      name: '',
      username: '',
      dob: '',
      password: '',
    })

  };

  return (
    <div className='signup-container flex flex-col justify-center items-center mt-4 sm:mt-8 md:mt-12'>
      <h1 className='text-xl sm:text-3xl md:text-6xl'>SIGNUP</h1>
      <form onSubmit={handleSubmit} className='mt-8 text-md sm:text-xl md:text-2xl'  id='userLogin'>
        <div className='form-group  flex flex-col sm:flex-row mt-4  '>
          <label htmlFor='name' className='mr-2'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group  flex flex-col sm:flex-row my-4 md:my-8'>
          <label htmlFor='username' className='mr-2'>Username:</label>
          <input
            type='text'
            id='username'
            name='username'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group flex flex-col justify-between sm:flex-row mt-4'>
          <label htmlFor='dob' className='mr-2'>Date of Birth:</label>
          <input
            type='date'
            id='dob'
            name='dob'
            className='flex justify-center'
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group  flex flex-col sm:flex-row my-4 md:my-8'>
          <label htmlFor='password' className='mr-2'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <p className='text-sm md:text-lg mb-4'>Already have an account? <Link to='/'>Login</Link></p>
        <button type='submit' className='submit-button'>Sign Up</button>
      </form>
    </div>
  );
}
