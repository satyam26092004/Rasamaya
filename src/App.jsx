import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Slider from "../components/Slider";
import Mostsearched from "../components/MostSearchedElement/Mostsearched"; 
import SearchBar from "../components/SearchBar/searchBar";
import ContactUs from "../components/contactus/contactus";
import Mission from "../components/mission/mission";
import AboutUs from "../components/aboutus/aboutus";
import Book from "../components/recepiebook/book"; // Ensure this path is correct

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const appMainStyle = {
    position: "relative",
    backgroundImage: "url('/Assets/images/bg.jpg')", // Ensure the path is correct
    backgroundSize: "cover",
    height: "100vh", // Set height to cover the viewport
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.7)", // White overlay with 70% opacity
    zIndex: 0,
  };

  const appTitleStyle = {
    textAlign: "center",
    fontFamily: "cursive",
    fontSize: "65px",
    color: "black", // Change text color for better visibility
    padding: "0px",
    margin: "0",
    position: "relative", // Position relative for the overlay
    zIndex: 1, // Ensure title is above the overlay
  };

  return (
    <>
      {isLoading && <Loading />}
      <main style={appMainStyle}>
        <div style={overlayStyle}></div>
        <h1 style={appTitleStyle}>RASAMAYA</h1>
        <Slider />
        <SearchBar />
        <Mostsearched />
        <Book />
        <Mission />
        <AboutUs />
        <ContactUs />
      </main>
    </>
  );
}

export default App;