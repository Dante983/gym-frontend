// Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, setLoggedIn, userRole }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false);
    navigate('/login');
  };

  const handleDashboard = () => {
    if (userRole === 'admin') {
      navigate('/admin-dashboard');
    } else {
      navigate('/user-dashboard');
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><a href="/" onClick={(e) => { e.preventDefault(); isLoggedIn ? handleDashboard() : navigate('/login'); }}>
          {isLoggedIn ? 'Dashboard' : 'Login'}</a></li>
      </ul>
      {isLoggedIn && <a onClick={handleLogout}>Logout</a>}
    </nav>
  );
};

export default Navbar;