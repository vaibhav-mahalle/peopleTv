import React from "react";
import "../Auth/Auth.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signupPage">
      <div className="signupContainer">
        <h1 className="page-heading">Signup</h1>
  
        <form className="signupForm flex-column">
          <div className="input-wrapper m-b-1">
            <label htmlFor="input">First Name</label>
            <input
              type="text"
              name="firstName"
              autoComplete="on"
              required
              className="input-box font-xs"
              placeholder="Enter first name"
            />
          </div>
    
          <div className="input-wrapper m-b-1">
            <label htmlFor="input">Last Name</label>
            <input
              type="text"
              name="lastName"
              autoComplete="on"
              required
              className="input-box font-xs"
              placeholder="Enter last name"
            />
          </div>
    
          <div className="input-wrapper m-b-1">
            <label htmlFor="input">Email</label>
            <input
              type="email"
              name="email"
              autoComplete="on"
              required
              className="input-box font-xs"
              placeholder="Enter your email"
            />
          </div>
    
          <div className="input-wrapper m-b-1">
            <label htmlFor="input">Enter Password</label>
            <input
              type="password"
              name="password"
              required
              className="input-box font-xs"
              placeholder="Enter password"
            />
          </div>
    
          <div className="input-wrapper m-b-1">
            <label htmlFor="input">Confirm Password</label>
            <input
              type="password"
              name="conirmPassword"
              required
              className="input-box font-xs"
              placeholder="Confirm password"
            />
          </div>
    
          <button className="btn btn-primary">Sign Up</button>
        </form>
  
        <button className="btn btn-outline-secondary">
          <Link to="/Login">Already a User? Login</Link>
        </button>
      </div>
    </div>
  );
}

export { Signup };
