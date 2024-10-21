import React from 'react'
import './Review.css'
//image
import ngubra from '../../assets/ngubra.png'
import { IoIosContacts } from "react-icons/io";
import { AiFillStar } from 'react-icons/ai';

const Review = () => {
  return (
    <div className="review">
      <div className="sec-heading">
        <div className="review-title">Recent Reviews</div>
        <div className="upload-review">
          <div className="upload-review-button">
            <i className="fas fa-upload"></i>
          </div>
          <a href="/upload-review" className="upload-link">Upload your review</a>
        </div>
      </div>
      <div className="review-container">
        <div className="review-card">
          <div className="img-container">
          <img src={ngubra} alt="Cattle Image"/>
          </div>
          <div className="review-content">
            <div className="review-title">Efficiency</div>
            <div className="review-description">
              <p>the efficiency here is just great...................................................... I was happy to recive my bull</p>
            </div>
            <div className="reviewer-info">
              <div className="reviewer-profile">
                <div className="icon-container">
                <IoIosContacts className='icon'/>
                </div>
                <div className="about-reviewer">
                  <span className="name">Karen Matima</span>
                  <p>Restauranteur</p>
                </div>
              </div>
              <div className="rating-container">
              <AiFillStar className='fas fa-star'/>
              <blockquote className='rating'>4.5</blockquote>
              </div>
            </div>
          </div>
        </div>
        <div className="review-card">
          <div className="img-container">
          <img src={ngubra} alt="Cattle Image"/>
          </div>
          <div className="review-content">
            <div className="review-title">Ngubra breed</div>
            <div className="review-description">
              Recently got my Ngubra cattle via this platform.
            </div>
            <div className="reviewer-info">
              <div className="reviewer-profile">
                <div className="icon-container">
                <IoIosContacts className='icon'/>
                </div>
                <div className="about-reviewer">
                  <span className="name">John Doe</span>
                  <p>Local Farmer</p>
                </div>
              </div>
              <div className="rating-container">
              <AiFillStar className='fas fa-star'/>
              <blockquote className='rating'>4.8</blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review