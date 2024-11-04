import React from 'react';
import './style.book.css'; // Make sure to create this CSS file for styling

const RecipeBook = () => {
  const handleBuyNow = () => {
    alert('Thank you for your interest! Redirecting to purchase...');
    // Here you can redirect to a purchase link or handle the purchase logic
  };

  return (
    <div className='recipe-book-container'>
      <h1 className='title'>Delicious Recipes: A Culinary Journey</h1>
      <img
        src='./Assets/images/book.jpg' // Replace with your book cover image URL
        alt='Recipe Book Cover'
        className='book-cover'
      />
      <p className='description'>
        Discover a collection of mouth-watering recipes that will delight your taste buds! 
        This recipe book features easy-to-follow instructions, beautiful photography, and 
        a variety of dishes for every occasion. Whether you're a beginner or an experienced cook, 
        you'll find something to inspire you in this book.
      </p>
      <button className='buy-button' onClick={handleBuyNow}>
        Buy Now
      </button>
    </div>
  );
};

export default RecipeBook;