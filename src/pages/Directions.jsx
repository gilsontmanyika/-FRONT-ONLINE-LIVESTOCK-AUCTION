import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import './styles/Directions.css';
import Footer from '../Components/Footer/Footer';

const Directions = () => {
    return (
        <>
            <div className="directions">
              <Navbar />
            </div>
             
                <div className="overall">

                <div className='zviheader'>
                          <h1>Welcome to the Livestock Auction Site</h1>
                          <p>Below are some key sections of our website to help you navigate:</p>
                        </div>
                    <div className="dirContents">
                        <div className="dirsection">
                            <h2><Link to="/">Home Page</Link></h2>
                            <p>Get an overview of available livestock, recent bids, and featured sellers.</p>
                        </div>

                        <div className="dirsection">
                            <h2><Link to="/search">Search Livestock</Link></h2>
                            <p>Use the search page to find livestock based on breed, age, sex, or location.</p>
                        </div>

                        <div className="dirsection">
                            <h2><Link to="/listings">Listings</Link></h2>
                            <p>Browse detailed information about each animal including images, price, weight, and seller information.</p>
                        </div>

                        <div className="dirsection">
                            <h2><Link to="/biddingpage">Bidding</Link></h2>
                            <p>Place a bid on the animal's detail page by entering your bid amount and confirming your bid.</p>
                        </div>

                        <div className="dirsection">
                            <h2><Link to="/userprofile">User Profile</Link></h2>
                            <p>View your bidding history, saved listings, and account settings in your user profile.</p>
                        </div>

                        <div className="dirsection">
                            <h2><Link to="/contact">Contact Us</Link></h2>
                            <p>Need help? Reach out to our support team through the 'Contact Us' page.</p>
                        </div>
                    </div>
                    <div className='dfooting'>
                       <Footer/>
                    </div>
                </div>
        </>   
        
    );
};

export default Directions;