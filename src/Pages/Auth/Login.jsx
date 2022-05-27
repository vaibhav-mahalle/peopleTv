import React from "react";
import "../Auth/Auth.css";
import { Link } from "react-router-dom";

function Login() {
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
        <p>Login with guest credentials?</p>
        <button className="btn btn-primary">Sign-In</button>
        <button className="btn btn-outline-secondary"><Link to="/signup">New User? Sign-Up</Link></button>
      </main>
    </div>
  );
}

export { Login };
