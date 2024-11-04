import React from 'react';
import Tilt from 'react-parallax-tilt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faSignal, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import './style.Mostseached.css';

const MostSearchedItems = () => {
  return (
    <div className="most-searched-section">
      <div className="section-header">
        <h2 className="most-searched-header">Most Searched Recipes</h2>
        <p className="section-subtitle">Discover our community's favorite dishes</p>
      </div>

      <div className="most-searched-items">
        {/* Card 1 */}
        <Tilt className="tilt" tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02}>
          <div className="item-card">
            <div className="item-image-container">
              <img src="/Assets/images2/img1.jpg" alt="Classic Chicken Biryani" className="item-image" />
              <div className="cuisine-tag">Indian</div>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.8
              </div>
            </div>
            <div className="item-content">
              <h3 className="item-title">Classic Chicken Biryani</h3>
              <p className="item-description">Aromatic basmati rice layered with tender chicken, caramelized onions, and signature spices.</p>
              <div className="item-details">
                <span className="detail"><FontAwesomeIcon icon={faClock} /> 45 mins</span>
                <span className="detail"><FontAwesomeIcon icon={faSignal} /> Medium</span>
                <span className="detail likes"><FontAwesomeIcon icon={faHeart} /> 2.3k</span>
              </div>
              <button className="view-recipe-btn">View Recipe<span className="arrow">→</span></button>
            </div>
          </div>
        </Tilt>

        {/* Card 2 */}
        <Tilt className="tilt" tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02}>
          <div className="item-card">
            <div className="item-image-container">
              <img src="/Assets/images2/img2.jpg" alt="Creamy Paneer Butter Masala" className="item-image" />
              <div className="cuisine-tag">North Indian</div>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.6
              </div>
            </div>
            <div className="item-content">
              <h3 className="item-title">Creamy Paneer Butter Masala</h3>
              <p className="item-description">Rich and creamy curry featuring soft paneer cubes in a tomato-based gravy.</p>
              <div className="item-details">
                <span className="detail"><FontAwesomeIcon icon={faClock} /> 30 mins</span>
                <span className="detail"><FontAwesomeIcon icon={faSignal} /> Easy</span>
                <span className="detail likes"><FontAwesomeIcon icon={faHeart} /> 1.8k</span>
              </div>
              <button className="view-recipe-btn">View Recipe<span className="arrow">→</span></button>
            </div>
          </div>
        </Tilt>

        {/* Add additional hardcoded cards for each recipe following the same structure as above */}

      </div>
    </div>
  );
};

export default MostSearchedItems;
