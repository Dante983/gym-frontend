// Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn, setLoggedIn, userRole }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data, then update login status
    setLoggedIn(false);
    // Redirect to login page
    navigate('/login');
  };
console.log(userRole);
  const handleDashboard = () => {
    if (userRole === 'admin') {
      navigate('/admin-dashboard');
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
        <li><a href="/" onClick={(e) => { e.preventDefault(); isLoggedIn ? handleDashboard() : navigate('/login'); }}>
          {isLoggedIn ? 'Dashboard' : 'Login'}</a></li>
        {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
      </ul>
    </nav>
  );
};

export default Navbar;