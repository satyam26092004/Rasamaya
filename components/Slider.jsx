import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Make sure to import Swiper styles

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { gsap } from 'gsap';
import { Parallax, Pagination, Autoplay } from 'swiper/modules';
import './Slider.css';

function Slider() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.set(containerRef.current, { opacity: 1, scale: 1, filter: 'blur(0px)' });

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, scale: 1.2, filter: 'blur(10px)' },
      {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <div className="slider-container">
      <div ref={containerRef}>
        <Swiper
          speed={600}
          parallax={true}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ 
            delay: 6000,
            disableOnInteraction: false
          }}
          modules={[Parallax, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide-bg" style={{ backgroundImage: 'url(/Assets/images/img1.jpg)' }}>
              <div className='swipercontent'>
                <span className="subtitle">Welcome to Our Culinary World</span>
                <h1>A World of Flavors at Your Fingertips</h1>
                <h2>Discover the Art of Global Cuisine</h2>
                <p>Embark on a culinary journey through our vast collection of handpicked recipes from every corner of the globe. From traditional comfort foods to innovative fusion dishes, our platform brings the world's kitchen to your home. Each recipe is carefully curated to ensure an authentic and delightful cooking experience.</p>
                <div className="slide-features">
                  <span>✦ Global Recipes</span>
                  <span>✦ Expert Curated</span>
                  <span>✦ Easy to Follow</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-bg" style={{ backgroundImage: 'url(/Assets/images/img2.jpg)' }}>
              <div className='swipercontent'>
                <span className="subtitle">Master the Basics & Beyond</span>
                <h1>Step-by-Step Culinary Excellence</h1>
                <h2>Your Journey to Cooking Mastery</h2>
                <p>Transform your cooking skills with our meticulously detailed instructions and professional guidance. Whether you're a beginner or an experienced chef, our step-by-step approach ensures perfect results every time. Learn essential techniques, master complex dishes, and discover the secrets of professional cooking.</p>
                <div className="slide-features">
                  <span>✦ Detailed Instructions</span>
                  <span>✦ Pro Techniques</span>
                  <span>✦ Video Tutorials</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-bg" style={{ backgroundImage: 'url(/Assets/images/img3.jpg)' }}>
              <div className='swipercontent'>
                <span className="subtitle">Learn from the Best</span>
                <h1>Expert Tips & Culinary Secrets</h1>
                <h2>Elevate Your Cooking Game</h2>
                <p>Unlock the secrets of professional chefs and culinary experts who share their years of experience with you. Learn insider tips, professional techniques, and creative twists that will transform your dishes from good to extraordinary. Our expert community is here to guide you through every culinary challenge.</p>
                <div className="slide-features">
                  <span>✦ Chef's Secrets</span>
                  <span>✦ Pro Techniques</span>
                  <span>✦ Expert Advice</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-bg" style={{ backgroundImage: 'url(/Assets/images/img4.jpg)' }}>
              <div className='swipercontent'>
                <span className="subtitle">Tailored for Your Taste</span>
                <h1>Your Personal Culinary Journey</h1>
                <h2>Recipes That Match Your Style</h2>
                <p>Experience a personalized cooking adventure with recipes curated just for you. Our smart recommendation system learns your preferences, dietary requirements, and cooking style to suggest dishes that you'll love. Create your own digital cookbook filled with recipes that match your unique taste.</p>
                <div className="slide-features">
                  <span>✦ Personalized Picks</span>
                  <span>✦ Smart Suggestions</span>
                  <span>✦ Custom Collections</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-bg" style={{ backgroundImage: 'url(/Assets/images/img5.jpg)' }}>
              <div className='swipercontent'>
                <span className="subtitle">Join Our Cooking Community</span>
                <h1>Share, Learn & Grow Together</h1>
                <h2>Connect with Fellow Food Enthusiasts</h2>
                <p>Become part of a vibrant community of food lovers who share your passion for cooking. Exchange recipes, share your culinary creations, and learn from fellow cooking enthusiasts. Our platform brings together people from all walks of life who share one common love - the joy of cooking.</p>
                <div className="slide-features">
                  <span>✦ Community Reviews</span>
                  <span>✦ Recipe Sharing</span>
                  <span>✦ Cooking Tips</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;