import React, { useState } from "react";
import "../Auth/Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { handleSingup } from "../../context/Auth/util";
import { useAuth } from "../../context/Auth/context";

function Signup() {
  const initialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const navigate = useNavigate();
  const { authDispatch } = useAuth();

  const [userDetails, setUserDetails] = useState(initialDetails);

  const handleChange = (e) => {
    const propertyName = e.target.name;
    const propertyValue = e.target.value;
    setUserDetails({ ...userDetails, [propertyName]: propertyValue });
  };
  const signupHandler = (e) => {
    e.preventDefault();
    handleSingup(userDetails, authDispatch, navigate);
  };
  return (
    <div className="signupPage">
      <div className="signupContainer">
        <h1 className="page-heading">Signup</h1>

        <form className="signupForm flex-column" onSubmit={(e)=>signupHandler(e)}>
          <div className="input-wrapper m-b-1">
            <label htmlFor="input">First Name</label>
            <input
              type="text"
              name="firstName"
              autoComplete="on"
              required
              className="input-box font-xs"
              onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
              placeholder="Confirm password"
            />
          </div>

          <button type="submit" className="btn btn-primary" >
            Sign Up
          </button>
        </form>

        <button className="btn btn-outline-secondary">
          <Link to="/Login">Already a User? Login</Link>
        </button>
      </div>
    </div>
  );
}

export { Signup };
