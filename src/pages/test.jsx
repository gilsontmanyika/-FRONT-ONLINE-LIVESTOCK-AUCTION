import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from "../Components/Navbar/Navbar";

const Listing = () => {
  const [form, setForm] = useState({
    name: '',
    breed: '',
    age: '',
    weight: '',
    gender: '', // Modify to include gender field
    color: '',
    health_info: '',
    video: '',
    pictures: [], // Modify to handle an array of pictures
    status: true,
  });

  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle picture uploads
  const handlePictureChange = (e) => {
    const files = Array.from(e.target.files);
    setForm({ ...form, pictures: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append form data
    for (const key in form) {
      if (key === 'pictures') {
        form[key].forEach((file, index) => {
          formData.append(`picture${index + 1}`, file);
        });
      } else {
        formData.append(key, form[key]);
      }
    }

    try {
      await axios.post('http://127.0.0.1:8000/api/v1/livestock/animals/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setFeedback('Cattle registered successfully!');
    } catch (error) {
      console.error(error);
      setFeedback('An error occurred while registering. Please try again');
    }
  };

  return (
    <div className='container-fluid h-screen flex justify-center items-center'>
      <div className='list-nav'>
        <Navbar />
      </div>
      <div className='bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 w-96'>
        <h1 className='text-3xl font-bold underline text-blue-600 mb-8 text-center'>Register your Cattle</h1>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name" className="inline-block text-neutral-700 dark:text-neutral-200">Name:</label>
            <input type="text" name="name" onChange={handleChange} id="name" placeholder="Name" className="mb-2 inline-block text-neutral-700 dark:text-neutral-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-2">
            <label htmlFor="breed" className="inline-block text-neutral-700 dark:text-neutral-200">Breed:</label>
            <input type="text" name="breed" onChange={handleChange} id="breed" placeholder="Breed" className="mb-2 inline-block text-neutral-700 dark:text-neutral-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-2">
            <label htmlFor="age" className="inline-block text-neutral-700 dark:text-neutral-200">Age:</label>
            <input type="number" name="age" onChange={handleChange} id="age" placeholder="Age" className="mb-2 inline-block text-neutral-700 dark:text-neutral-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-2">
            <label htmlFor="weight" className="inline-block text-neutral-700 dark:text-neutral-200">Weight (Kgs):</label>
            <input type="number" name="weight" onChange={handleChange} id="weight" placeholder="Weight" className="mb-2 inline-block text-neutral-700 dark:text-neutral-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-2">
            <label htmlFor="gender" className="inline-block text-neutral-700 dark:text-neutral-200">Gender:</label>
            <select name="gender" onChange={handleChange} id="gender" className="mb-2 inline-block text-neutral-700 dark:text-neutral-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
              <option value="" disabled>Select Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="color" className="inline-block text-neutral-700 dark:text-neutral-200">Color:</label>
            <input type="text" name="color" onChange={handleChange} id="color" placeholder="Color" className="mb-2 inline-block text-neutral-700 dark:text-neutral-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-2">
            <label htmlFor="health_info" className="inline-block text-neutral-700 dark:text-neutral-200">Health Information:</label>
            <textarea name="health_info" onChange={handleChange} id="health_info" placeholder="Health Information" className="mb-2 inline-block text-neutral-700 dark:text-neutral-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"></textarea>
          </div>
        
          <div className="mb-2">
            <label htmlFor="pictures" className="inline-block text-neutral-700 dark:text-neutral-200">Pictures:</label>
            <input type="file" name="pictures" onChange={handlePictureChange} id="pictures" className="mb-2 inline-block text-neutral-700 dark:text-neutral-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" multiple />
          </div>
          <div className="mb-2">
            <label htmlFor="status" className="inline-block text-neutral-700 dark:text-neutral-200">Status:</label>
            <input type="checkbox" name="status" onChange={handleChange} id="status" checked={form.status} className="mb-2 inline-block text-neutral-700 dark:text-neutral-200 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Register</button>
          <Link to="/browsing" className='text-blue-500'>Browse Listings</Link>
          {feedback && <p className='text-red-500'>{feedback}</p>}
        </form>
      </div>
    </div>
  );
};

export default Listing;
