// Home.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './Home.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

const Home = () => {
  return (
    <div className="home">
      <h2 className="title">Welcome to our Gym!</h2>
      <p className="subtitle">This is the home page.</p>
      <Carousel autoPlay infiniteLoop>
        <div>
          <img src={image1} alt="Gym Image 1" />
        </div>
        <div>
          <img src={image2} alt="Gym Image 2" />
        </div>
        <div>
          <img src={image3} alt="Gym Image 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Home;