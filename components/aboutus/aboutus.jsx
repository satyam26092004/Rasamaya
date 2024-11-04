import React from 'react';
import './style.aboutus.css'; // Make sure to create this CSS file for styling

const AboutUs = () => {
  return (
    <div className='about-us-container'>
        <div>
        <h1 className='title'style={{fontSize:"50px"}}>About Us</h1>
      <p>
        At Rasamaya, we believe that cooking is not just a necessity, but an art form that brings people together. 
        Our mission is to inspire home cooks of all skill levels to explore their culinary creativity. 
        With a diverse collection of recipes, cooking tips, and engaging content, we aim to make cooking enjoyable and accessible for everyone.
      </p>
      <p>
        Our team is passionate about food and dedicated to sharing the joy of cooking. 
        Whether you're a beginner looking to learn the basics or an experienced chef seeking new ideas, 
        Rasamaya is here to support you on your culinary journey.
      </p>
        </div>
     
      <div className='image-wrapper'>
        <img src="/Assets/images/about-us.jpg" alt="About Us" className='about-image' />
      </div>
    </div>
  );
};

export default AboutUs;