import { useState } from 'react';
import './main.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { addSidebar } from '../../features/users/userSlice';
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';

const Feedback = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    dispatch(addSidebar(5));
  const [formData, setFormData] = useState({
    student : user.username,
    name: '',
    content: '',
    teach: '',
    description: '',
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
    // Handle form submission
    axios.post('/api/feedback', formData).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.error(error);
    })
    console.log('Feedback Submitted:', formData);

    setFormData({
      name: '',
      content: '',
      teach: '',
      description: '',
    });
  };

  return (
    <>
    <Navbar/>
    <Sidebar/>
    <form onSubmit={handleSubmit} className="ml-16 max-w-xl mt-20 ">
      <h2 className="text-lg md:text-4xl font-bold my-4">Professor Feedback Form</h2>

      <div className="mb-4">
        <label htmlFor="name" className="mb-2 text-sm md:text-lg">Choose Professor:</label>
        <select
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">Select a name</option>
          {['Professor A', 'Professor B', 'Professor C', 'Professor D', 'Professor E', 'Professor F', 'Professor G', 'Professor H', 'Professor I', 'Professor J'].map((prof) => (
            <option key={prof} value={prof}>{prof}</option>
          ))}
        </select>
      </div>
     { 
        formData.name && 
        <div>
        <div className="mb-4 flex flex-col md:flex-row">
        <label className="block mb-2 text-sm md:text-2xl">Course Content Rating:</label>
        <div className='flex justify-center text-sm md:text-xl md:mx-4'>
        {[1, 2, 3, 4, 5].map((rating) => (
          <label key={rating} className="text-sm md:text-xl">
            <input
              type="radio"
              name="content"
              value={rating}
              checked={formData.content === String(rating)}
              onChange={handleChange}
              className="mr-1"
            />
            {rating} *
          </label>
        ))}
        </div>
      </div>

      <div className="mb-4 flex flex-col md:flex-row justify-evenly">
        <label className="block mb-2 text-sm md:text-2xl">Teaching Rating:</label>
        <div className='flex justify-center text-sm md:text-xl'>
        {[1, 2, 3, 4, 5].map((rating) => (
          <label key={rating} className="">
            <input
              type="radio"
              name="teach"
              value={rating}
              checked={formData.teach === String(rating)}
              onChange={handleChange}
              className=""
            />
            {rating} *
          </label>
        ))}
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block mb-2">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-4/6 md:w-5/6 lg:w-full max-h-20 md:max-h-full p-2 border border-gray-300 rounded"
          rows="4"
        />
      </div>
      
      </div>
      }

      <button type="submit" className=" bg-blue-500 text-white font-bold rounded">Submit Feedback</button>
    </form>
    </>
  );
};

export default Feedback;
