// Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch('http://localhost:3001/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <>
    <div className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Message:
          <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
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

export default Contact;