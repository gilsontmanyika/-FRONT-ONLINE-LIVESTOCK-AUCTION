
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from "../Components/Navbar/Navbar";
import { useNavigate } from 'react-router-dom';
import { getToken } from '../services/decoder';
import './styles/Listing.css'


// get token values
const tokenData = getToken();
console.log(`The token user id data is as follows: ${tokenData['user_id']}`);


const Listing = () => {
  const [form, setForm] = useState({
    name: '',
    breed: '',
    age: '',
    weight: '',
    gender: '', 
    color: '',
    health_info: '',
    video: 'testVid',
    pictures: null, // Set pictures to null initially
    price: 0,
    status: true,
    user: tokenData['user_id'],
  });

  const [feedback, setFeedback] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle picture upload
  const handlePictureChange = (e) => {
    const file = e.target.files[0]; // Get the first file from the input
    if (file) {
      setForm(prevState => ({
        ...prevState,
        pictures: file, // Set the file directly
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append form data
    for (const key in form) {
      formData.append(key, form[key]);
    }

    try {
      await axios.post('http://127.0.0.1:8000/api/v1/livestock/animals/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setFeedback('Cattle registered successfully!');
      navigate ('/browsing');
    } catch (error) {
      console.error(error);
      setFeedback('An error occurred while registering. Please try again');
    }
  };
  return (
    <div className='listing'>
      <div className='list-nav'>
        <Navbar />
      </div>
      <div className='list-contents'>
          <h1 className='the-title'>Register your Cattle</h1>
          <form className='this-form' onSubmit={handleSubmit}>

              <input 
              type="text" 
              name="name" 
              onChange={handleChange} 
              id="name" 
              placeholder="Name"
              />
            
              <input 
              type="text" 
              name="breed" 
              onChange={handleChange} 
              id="breed" 
              placeholder="Breed"
              />
            
              <input 
              type="number" 
              name="age" 
              onChange={handleChange} 
              id="age" 
              placeholder="Age"
              />
            
              <input 
              type="number" 
              name="weight" 
              onChange={handleChange} 
              id="weight" 
              placeholder="Weight"
              />
            
              <select name="gender" onChange={handleChange} id="gender">
                <option value="" disabled selected>Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            
              <input 
              type="text" 
              name="color" 
              onChange={handleChange} 
              id="color" 
              placeholder="Color"
              />
            
              <input 
              type="number" 
              name="price" 
              onChange={handleChange} 
              id="price" 
              placeholder="Animal Price"
              />
            
              <textarea 
              name="health_info" 
              onChange={handleChange} 
              id="health_info" 
              placeholder="Health Information"
              ></textarea>
            
              <input 
              type="file" 
              name="pictures" 
              onChange={handlePictureChange} 
              id="pictures" 
              multiple
              required
              />
            
              <input 
              type="checkbox" 
              name="status" 
              onChange={handleChange} 
              id="status" 
              checked={form.status}
              placeholder='status'
              />
            
            <button 
            className='the-button' 
            type="submit">
              Register
            </button>

            <Link 
            to="/browsing" 
            className='browse'>
              Browse Listings
            </Link>

            {feedback && <p className='text-red-500'>{feedback}</p>}
          </form>
        </div>
    </div>
  );
};

export default Listing;