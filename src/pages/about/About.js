// About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
    <div className="about">
      <h2>About Our Gym</h2>
      <p>Our gym is equipped with state-of-the-art fitness equipment and offers a variety of classes to help you stay fit and healthy. We have a team of professional trainers who are here to guide you and help you achieve your fitness goals. Whether you're a beginner or a seasoned athlete, our gym has something for everyone.</p>
    </div>

<div class="container">
<footer class="py-3 my-4">
  <ul class="nav justify-content-center border-bottom pb-3 mb-3">
    <li class="nav-item"><a href="/" class="nav-link px-2 text-body-secondary">Home</a></li>    
    <li class="nav-item"><a href="/about" class="nav-link px-2 text-body-secondary">About</a></li>
    <li class="nav-item"><a href="/contact" class="nav-link px-2 text-body-secondary">Contact</a></li>
    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Dashboard</a></li>
  </ul>
  <p class="text-center text-body-secondary">© 2023 Company, Inc</p>
</footer>
</div>
</>
  );
};

export default About;