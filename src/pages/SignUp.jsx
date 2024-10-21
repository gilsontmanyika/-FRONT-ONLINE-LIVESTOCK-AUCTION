import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./styles/Signup.css";
import Navbar from '../Components/Navbar/Navbar';
import { BASE_URL } from '../services/http';

const SignUp = () => {

  const [formData, setFormData] = useState({
    user: {
      email: '',
      password: ''
    },
    first_name: '',
    last_name: '',
    national_id: '',
    contact1: '',
    contact2: '',
    address1: '',
    address2: '',
    city: '',
    country: ''
  });

  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'email' || e.target.name === 'password') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        user: { ...prevFormData.user, [e.target.name]: e.target.value }
      }));
    } else if (e.target.name === 'confirmPassword') {
      setConfirmPassword(e.target.value);
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [e.target.name]: e.target.value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.user.password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      console.log(formData); // This will print your formData to the console
      await axios.post(`${BASE_URL}/user-profile/users/`, formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      alert('Registration successful');
      navigate('/signin');
    } catch (error) {
      console.error(error);
      alert('Registration failed');
    }
  };

  return (
    <>
      <div className='signup-nav'>
        <Navbar />
      </div>
      <div className='log-contents'>
        <h1 className='title1'>Sign Up</h1>
        <form className='this-form' onSubmit={handleSubmit}>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
            placeholder='First Name'
          />
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
            placeholder='Last Name'
          />
          <input
            type="email"
            name="email"
            value={formData.user.email}
            onChange={handleChange}
            required
            placeholder='Email'
          />
          <input
            type="text"
            name="national_id"
            value={formData.national_id}
            onChange={handleChange}
            required
            placeholder='Your National Id (63-2159149 J71)'
          />
          <input
            type="text"
            name="contact1"
            value={formData.contact1}
            onChange={handleChange}
            required
            placeholder='Mobile Contact'
          />
          <input
            type="text"
            name="contact2"
            value={formData.contact2}
            onChange={handleChange}
            placeholder='Alternate Contact'
          />
          <input
            type="text"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
            required
            placeholder='Home Address'
          />
          <input
            type="text"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
            placeholder='Postal Address'
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder='Location (City)'
          />
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder='Location (Country)'
          />
          <input
            type="password"
            name="password"
            value={formData.user.password}
            onChange={handleChange}
            required
            placeholder='Enter Password'
          />
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            placeholder='Confirm Password'
          />
          <button type="submit" className='the-button'>SIGN UP</button>
          <div className='low-links1'>
            <Link to="/signin">SIGN IN INSTEAD</Link>
            <Link to="/forgot-password">FORGOT PASSWORD</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;