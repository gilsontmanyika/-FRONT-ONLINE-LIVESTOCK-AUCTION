import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../services/http';
import Navbar from '../Components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import './styles/Browsing.css'; // Import the SCSS file

const Browsing = () => {
    const [bids, setBids] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/livestock/animals/`);
                setBids(response.data);
            } catch (error) {
                console.error("Error fetching data from API", error);
            }
        };

        fetchData();
    }, []);

    // Function to handle click on bid container
    const handleBidClick = async (animalId, userId) => {
        try {
            const response = await axios.get(`${BASE_URL}/livestock/animals/${animalId}/`);
            const animalData = response.data;
            navigate(`/biddingpage?animalId=${animalId}&userId=${userId}`, { state: { animalData } });
        } catch (error) {
            console.error("Error fetching animal data", error);
        }
    };

    return (
        <>
            <Navbar className='navbar-browse'/>
            <div className="container-browse">
                <h1 className='heading-browse'>Listings</h1>
                <div className="grid-browse">
                    {bids.map((bid, index) => (
                        <div key={index} className="card-browse" onClick={() => handleBidClick(bid.id, bid.user)}>
                            <img src= {`http://localhost:8000${bid.images[0].image}`} alt="Animal" className="image" />
                            <h2 className="title-browse">{bid.name}</h2>
                            <p className="info-browse">Breed: {bid.breed}</p>
                            <p className="info-browse">Price: ${bid.price}</p>
                            <p className="info-browse">Weight: {bid.weight} Kgs</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Browsing;
