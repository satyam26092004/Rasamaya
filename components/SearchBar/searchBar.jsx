import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner, faUtensils, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import './style.searchbar.css';

const SearchBar = () => {
  const [foodItem, setFoodItem] = useState('pizza');
  const [foodData, setFoodData] = useState([]);
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const YOUTUBE_API_KEY = "AIzaSyAzD22RF1f2ozKhrUqDVdD2772LkNZNlDM";
  const API_KEY = "6a7ec01b2e694b17945b4a557fbd0e7f";

  useEffect(() => {
    const fetchFoodData = async () => {
      if (foodItem.trim() === '') {
        setFoodData([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?query=${foodItem}&apiKey=${API_KEY}`
        );
        setFoodData(response.data.results || []);
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchFoodData();
  }, [foodItem]);

  const handleSearchChange = (e) => {
    setFoodItem(e.target.value);
  };

  const handleRecipeSelect = async (recipeId) => {
    setLoading(true);
    setError(null);
    setIsModalOpen(true);

    try {
      const recipeResponse = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`
      );
      setRecipe(recipeResponse.data);

      // Fetch YouTube video related to the recipe
      const videoResponse = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${recipeResponse.data.title} recipe&key=${YOUTUBE_API_KEY}`
      );
      const videoId = videoResponse.data.items[0]?.id.videoId;
      setVideoUrl(videoId ? `https://www.youtube.com/embed/${videoId}` : null);
    } catch (err) {
      setError('Failed to load recipe details. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setRecipe(null);
  };

  return (
    <div className="search-bar-container">
      <div className="search-input">
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={foodItem}
          onChange={handleSearchChange}
        />
        <button className="search-button" onClick={() => setFoodItem(foodItem)}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      {loading && (
        <div className="loading-indicator">
          <FontAwesomeIcon icon={faSpinner} spin />
        </div>
      )}

      {error && <div className="error-message">{error}</div>}

      <AnimatePresence>
        <div className="recipe-list">
          {foodData.map((recipe) => (
            <motion.div
              key={recipe.id}
              className="recipe-card"
              onClick={() => handleRecipeSelect(recipe.id)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img src={recipe.image} alt={recipe.title} className="recipe-image" />
              <h3 className="recipe-title">{recipe.title}</h3>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>

      <AnimatePresence>
        {isModalOpen && recipe && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="modal-content" 
              initial={{ scale: 0.8 }} 
              animate={{ scale: 1 }} 
              exit={{ scale: 0.8 }}
            >
              <span className="close" onClick={closeModal}>&times;</span>
              <h2 className="modal-title">{recipe.title}</h2>
              <img src={recipe.image} alt={recipe.title} className="modal-image" />
              <div className="modal-details">
                <h3>Ingredients:</h3>
                <ul className="ingredients-list">
                  {recipe.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>
                      {ingredient.name}
                    </li>
                  ))}
                </ul>

                <h3>Instructions:</h3>
                <ol className="steps-list">
                  {recipe.analyzedInstructions[0]?.steps.map((step) => (
                    <li key={step.number}>
                      {step.step}
                    </li>
                  ))}
                </ol>

                {videoUrl && (
                  <div className="video-container">
                    <iframe
                      src={videoUrl}
                      title="YouTube Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
