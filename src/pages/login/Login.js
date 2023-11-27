// Login.js
import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;