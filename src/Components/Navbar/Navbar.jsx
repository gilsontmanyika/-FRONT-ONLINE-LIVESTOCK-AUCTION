import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../services/decoder'; // import your token helper function
import '../Navbar/Navbar.css';

import logo from '../../assets/logo.png';

const Navbar = () => {
  const [navbar] = useState('navbar');
  const [header, setHeader] = useState('header');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null); // State to store user ID
  const navigate = useNavigate();

  useEffect(() => {
    // Check for token and set login state accordingly
    const token = getToken();
    if (token) {
      setIsLoggedIn(true);
      setUserId(token.userId); // Assuming your token decoder returns userId
    } else {
      setIsLoggedIn(false);
      setUserId(null);
    }

    // Add event listener for scroll
    const addBg = () => {
      if (window.scrollY >= 20) {
        setHeader('header addBg');
      }
    };
    window.addEventListener('scroll', addBg);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', addBg);
    };
  }, []); // Empty dependency array to run effect only once

  const handleLogout = () => {
    // Perform logout logic (e.g., clearing tokens, etc.)
    localStorage.removeItem('accessToken'); // Clear access token from local storage
    setIsLoggedIn(false);
    setUserId(null);
    // Add any additional logout logic here
  };

  const handleIconClick = () => {
    // Navigate to user profile page
    navigate('/userprofile');
  };

  return (
    <div className={header}>
      <div className="logoDiv">
        <img src={logo} alt="Logo Image" className="logo" />
        <h1>COWSTOCK</h1>
      </div>
      <div className={navbar}>
        <ul className="menu">
          <li className="listItem">
            <a href="/" className="link">
              Home
            </a>
          </li>
          <li className="listItem">
            <Link to="/auctions" className="link">
              Auctions
            </Link>
          </li>
          <li className="listItem">
            <Link to="/directions" className="link">
              Directions
            </Link>
          </li>
          <li className="listItem">
            <Link to="/about" className="link">
              About
            </Link>
          </li>
        </ul>
      </div>

      {isLoggedIn ? (
        <div className="signUp flex">
          <FaUser onClick={handleIconClick} style={{ cursor: 'pointer' }} />
          <Link to="/userprofile" className="text1">
            MY PROFILE
          </Link>
          <button onClick={handleLogout} className='text1'>Sign Out</button>
        </div>
      ) : (
        <div className="signUp flex">
          <Link to="/signin" className="text1">
            Sign In
          </Link>
          <Link to="/signup" className="text2">
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;