import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Home = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 d-flex flex-column align-items-center">
          <Carousel>
            <div>
              <img src={image1} className="d-block w-100" alt="image1" />
            </div>
            <div>
              <img src={image2} className="d-block w-100" alt="image2" />
            </div>
            <div>
              <img src={image3} className="d-block w-100" alt="image3" />
            </div>
          </Carousel>
          <div className="footer-container mt-auto">
            <footer className="py-3 my-4">
              <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
                <li className="nav-item"><a href="/about" className="nav-link px-2 text-body-secondary">About</a></li>
                <li className="nav-item"><a href="/contact" className="nav-link px-2 text-body-secondary">Contact</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Dashboard</a></li>
              </ul>
              <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
</>
  );
};

export default Home;
