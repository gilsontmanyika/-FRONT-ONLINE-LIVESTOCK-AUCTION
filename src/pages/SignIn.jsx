import { useState } from 'react';
import axios from 'axios';
import Navbar from "../Components/Navbar/Navbar";
import "./styles/Signin.css";
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../services/http';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || null);
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken') || null);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { email, password };
    try {
      const response = await axios.post(`${BASE_URL}/auth/api-token-auth/`, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      const { access, refresh } = response.data;
      setAccessToken(access);
      setRefreshToken(refresh);
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);
      navigate('/auctions'); // Redirect to User Profile page
    } catch (error) {
      setError(error.response.data.error);
      alert(error.response.data.error);
    }
  };
const handleLogout = () => {
  setAccessToken(null);
  setRefreshToken(null);
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

  if (isLoggedIn) {
    navigate('/userprofile'); // Redirect to User Profile page
    return null; // Return null or a loading component while redirecting
  } else {
    return (
      <>
        <div className='login-nav'>
          <Navbar />
        </div>
        <div className='log1-contents'>
          <h1>Sign In</h1>
          <form className='this1-form' onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='Email'
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='Password'
            />
            <button className='the-button' type="submit">
              Login
            </button>
            <div className='low-links'>
              <Link to="/forgot-password">Forgot Password? </Link>
              <Link to="/signup">Register </Link>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
        </div>
      </>
    );
  }
};

export default SignIn;