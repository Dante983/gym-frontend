// Login.js
import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="container-contact3">
      <div className="wrap-contact3">
        <form className="contact3-form validate-form">
          <span className="contact3-form-title">
            Contact Us
          </span>
          <div className="wrap-contact3-form-radio">
            <div className="contact3-form-radio m-r-42">
              <input
                className="input-radio3"
                id="radio1"
                type="radio"
                name="choice"
                value="say-hi"
                checked
              />
              <label className="label-radio3" htmlFor="radio1">
                Say Hiikjikjkj
              </label>
            </div>
            <div className="contact3-form-radio">
              <input
                className="input-radio3"
                id="radio2"
                type="radio"
                name="choice"
                value="get-quote"
              />
              <label className="label-radio3" htmlFor="radio2">
                Get a Quote
              </label>
            </div>
          </div>
          {/* ... other form elements ... */}
          <div className="container-contact3-form-btn">
            <button className="contact3-form-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
