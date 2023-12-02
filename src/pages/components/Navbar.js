// Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn, setLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data, then update login status
    setLoggedIn(false);
    // Redirect to login page
    navigate('/login');
  };

  const handleLogin = () => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      navigate('/user-dashboard');
    }
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/" onClick={handleLogin}>{isLoggedIn ? 'Dashboard' : 'Login'}</Link></li>
        {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
      </ul>
    </nav>
  );
};

export default Navbar;