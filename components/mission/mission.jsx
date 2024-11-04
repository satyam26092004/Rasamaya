import React from 'react';
import './styles.mission.css'; // Make sure to create this CSS file for styling

const Mission = () => {
  return (
    <div className='mission-container'>
      <div className='text-container'>
        <h1 className='title2' style={{textAlign:"center",fontSize:"70px"}}>Our Mission</h1>
        <p>
          At Rasamaya, we empower you to turn everyday cooking into extraordinary experiences. 
          With curated recipes, easy-to-follow instructions, and expert tips, we make cooking fun 
          and accessible for everyone. Discover, create, and share delicious meals effortlessly with us.
        </p>
      </div>
      <div className='video-wrapper'>
        <video className='video' src="/Assets/videos/video1.mp4" autoPlay muted loop />
      </div>
    </div>
  );
};

export default Mission;
