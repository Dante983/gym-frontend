// Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
            <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
          <li><Link to="/about" className="nav-link px-2">About</Link></li>
          <li><Link to="/contact" className="nav-link px-2">Contact</Link></li>
        </ul>

        <div className="col-md-3 text-end">
          {isLoggedIn ? (
            <>
              <button type="button" className="btn btn-outline-primary me-2" onClick={handleDashboard}>
                Dashboard
              </button>
              <button type="button" className="btn btn-outline-secondary" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <button
              type="button"
              className="btn btn-outline-primary me-2"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
