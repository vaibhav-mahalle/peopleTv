import React, { useState } from "react";
import "../Auth/Auth.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastMsg } from "../../components";
import { useAuth } from "../../context/Auth/context";
import { LoginHandler } from "../../context/Auth/util";

function Login() {
  const { authDispatch } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setLoginData({ ...loginData, [inputName]: value });
  };

  const testCredentials = {
    email: "vaibhavmahalle95@gmail.com",
    password: "Vaibhav123",
  };

  const setLogin = () => {
    setLoginData(testCredentials);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    LoginHandler(loginData, authDispatch, navigate, location);
  };
  return (
    <div className="loginPage">
      <div>
        <h2>Welcome to People TV</h2>
        <p>Please login to continue:</p>
      </div>
      <main className="loginContainer">
        <h1 className="page-heading">Login</h1>
        <div className="input-wrapper m-b-1">
          <label htmlFor="input">Email</label>
          <input
            type="email"
            name="email"
            autoComplete="on"
            required
            className="input-box font-xs"
            placeholder="Enter your email"
            value={loginData.email}
            onChange={(e) => handleChange(e)}
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
            value={loginData.password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <p className="guestDetails" onClick={setLogin}>
          Login with guest credentials?
        </p>
        <button className="btn btn-primary" onClick={handleLogin}>
          Sign In
        </button>
        <button className="btn btn-outline-secondary">
          <Link to="/signup">New User? Sign-Up</Link>
        </button>
      </main>
    </div>
  );
}

export { Login };
