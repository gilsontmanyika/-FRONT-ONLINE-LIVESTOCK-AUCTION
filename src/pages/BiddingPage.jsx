import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Navbar from "../Components/Navbar/Navbar";
import {getToken} from "../services/decoder";
import {BASE_URL} from "../services/http";
import { Link } from 'react-router-dom'

const AnimalDetails = ({ match }) => {
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bidPrice, setBidPrice] = useState('');
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const animalId = queryParams.get('animalId'); //get animal id from the url


  useEffect(() => {
    
    const fetchAnimal = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/livestock/animals/${animalId}/`);
        setAnimal(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchAnimal();
  }, [animalId]);

  const handleBidSubmit = async () => {
    // Implement your logic to submit the bid
    if (bidPrice <= animal.lastprice || bidPrice >= animal.lastprice * 1.35) {

      // Display an error message or prevent the bid submission
      
      alert('Invalid bid price. Please enter a valid bid.');
      return;
    }else{
        //sending data to server
        const tokenData = getToken();
        const userId = tokenData['user_id'];

        const bidData = {
          price: bidPrice.toString(),
          animal: animal.id,
          user: userId
        };

        try {
          const response = await axios.post(`${BASE_URL}/bidding/bid/`, bidData);
          console.log('Bid submitted successfully:', response.data);
          // making a succeful toast
          toast.success('Bid submitted successfully!', {
            position: 'bottom-center',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          
        } catch (error) {

          console.error('Error submitting bid:', error);
          toast.error('Failed to submit bid. Please try again later.', {
            position: 'bottom-center',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          
          // Handle error, display error message, etc.
        }


    }
    setShowModal(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!animal) {
    return <div>Animal not found</div>;
  }

  return (
    <div>
      <div className='list-nav mb-2'>
        <Navbar />
      </div>
      <div className="container mx-auto py-8">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Animal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>Name:</strong> {animal.name}</p>
              <p><strong>Breed:</strong> {animal.breed}</p>
              <p><strong>Age:</strong> {animal.age}</p>
              <p><strong>Weight:</strong> {animal.weight} Kgs</p>
              <p><strong>Gender:</strong> {animal.gender}</p>
              <p><strong>Color:</strong> {animal.color}</p>
              <p><strong>Health Information:</strong> {animal.health_info}</p>
              <p><strong>Status:</strong> {animal.status ? 'Active' : 'Inactive'}</p>
              {animal.video && <p><strong>Video:</strong> {animal.video}</p>}
              <p><strong>Price:</strong> ${animal.price}</p>
              <p><strong>Last Bidded Price:</strong> ${animal.lastprice}</p>
           
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Picture:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {animal.images.map((image, index) => (
                  <img key={index} src={`http://localhost:8000${image.image}`} alt={`Animal ${index}`} className="max-w-full" />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button onClick={() => setShowModal(true)} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Bid</button>
          </div>

          <Link to="/browsing" style={{ display: 'block', marginTop: '20px' }}>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Back to Listings</button>
      </Link>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Enter Bid Price</h2>
            <input
              type="number"
              value={bidPrice}
              onChange={(e) => setBidPrice(e.target.value)}
              placeholder="Enter bid price"
              className="border border-gray-300 rounded-lg p-2 w-full mb-4"
            />
            <div className="flex justify-end">
              <button onClick={handleBidSubmit} className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4">Submit</button>
              <button onClick={() => setShowModal(false)} className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimalDetails;