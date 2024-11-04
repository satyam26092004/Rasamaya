import React from 'react';
import Tilt from 'react-parallax-tilt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faSignal, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import './style.Mostseached.css';

const searchedItems = [
  {
    id: 1,
    title: 'Classic Chicken Biryani',
    description: 'Aromatic basmati rice layered with tender chicken, caramelized onions, and signature spices.',
    rating: 4.8,
    time: '45 mins',
    difficulty: 'Medium',
    cuisine: 'Indian',
    likes: '2.3k'
  },
  {
    id: 2,
    title: 'Creamy Paneer Butter Masala',
    description: 'Rich and creamy curry featuring soft paneer cubes in a tomato-based gravy.',
    rating: 4.6,
    time: '30 mins',
    difficulty: 'Easy',
    cuisine: 'North Indian',
    likes: '1.8k'
  },
  {
    id: 3,
    title: 'Crispy Masala Dosa',
    description: 'Thin, crispy rice crepe filled with spiced potato mixture, served with chutneys.',
    rating: 4.7,
    time: '40 mins',
    difficulty: 'Medium',
    cuisine: 'South Indian',
    likes: '1.5k'
  },
  {
    id: 4,
    title: 'Kashmiri Rogan Josh',
    description: 'Tender lamb slow-cooked in aromatic Kashmiri spices and yogurt.',
    rating: 4.9,
    time: '60 mins',
    difficulty: 'Hard',
    cuisine: 'Kashmiri',
    likes: '2.1k'
  },
  {
    id: 5,
    title: 'Authentic Butter Chicken',
    description: 'Tandoori chicken pieces simmered in a velvety tomato-based curry.',
    rating: 4.8,
    time: '50 mins',
    difficulty: 'Medium',
    cuisine: 'North Indian',
    likes: '3.2k'
  },
  {
    id: 6,
    title: 'Traditional Gulab Jamun',
    description: 'Soft milk-solid dumplings, deep-fried and soaked in aromatic sugar syrup.',
    rating: 4.5,
    time: '35 mins',
    difficulty: 'Easy',
    cuisine: 'Indian Dessert',
    likes: '1.9k'
  }
];

const MostSearchedItems = () => {
  return (
    <div className="most-searched-section">
      <div className="section-header">
        <h2 className="most-searched-header">Most Searched Recipes</h2>
        <p className="section-subtitle">Discover our community's favorite dishes</p>
      </div>

      <div className="most-searched-items">
        {searchedItems.map((item) => (
          <Tilt
            key={item.id}
            className="tilt"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.02}
          >
            <div className="item-card">
              <div className="item-image-container">
                <img 
                src={`Assets/images2/img${item.id}`}
                  alt={item.title} 
                  className="item-image" 
                />
                <div className="cuisine-tag">{item.cuisine}</div>
                <div className="rating">
                  <FontAwesomeIcon icon={faStar} className="star-icon" />
                  {item.rating}
                </div>
              </div>

              <div className="item-content">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-description">{item.description}</p>
                
                <div className="item-details">
                  <span className="detail">
                    <FontAwesomeIcon icon={faClock} /> {item.time}
                  </span>
                  <span className="detail">
                    <FontAwesomeIcon icon={faSignal} /> {item.difficulty}
                  </span>
                  <span className="detail likes">
                    <FontAwesomeIcon icon={faHeart} /> {item.likes}
                  </span>
                </div>

                <button className="view-recipe-btn">
                  View Recipe
                  <span className="arrow">→</span>
                </button>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default MostSearchedItems;