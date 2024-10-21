import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../services/http';

const UserProfile = () => {
  const [userData, setUserData] = useState({});
  const [userAnimals, setUserAnimals] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user-profile/users/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        // Handle error
      }
    };

    const fetchUserAnimals = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/animals`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        setUserAnimals(response.data.filter(animal => animal.userId === userData.id));
      } catch (error) {
        // Handle error
      }
    };

    fetchUserData();
    fetchUserAnimals();
  }, [userData.id]);

  return (
    <div>
      <h1>User Profile</h1>
      <h2>User Details</h2>
      <p>Name: {userData.name}</p>
      {/* Render other user profile information */}

      <h2>User's Animals</h2>
      <ul>
        {userAnimals.map(animal => (
          <li key={animal.id}>
            <p>Name: {animal.name}</p>
            {/* Render other animal details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;