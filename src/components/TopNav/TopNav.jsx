import React from "react";
import "./TopNav.css";
import { AiOutlineMenu } from "react-icons/ai";
import BrandLogo from "../../assets/BrandLogo.png";
import { useAuth } from "../../context/Auth/context";
import { Link, useNavigate } from "react-router-dom";
import { logoutHandler } from "../../context/Auth/util";


function TopNav() {
  const { authState, authDispatch } = useAuth();
  const { isLoggedIn } = authState;
  const navigate = useNavigate();
  return (
    <header className="nav-container">
      <div>
        <AiOutlineMenu size={35} />
        {/* <img src={BrandLogo} alt="Brand-logo" /> */}
      </div>
      {isLoggedIn ? (
        <button className="btn btn-outline-primary font-bold font-sm" onClick={()=>logoutHandler(authDispatch,navigate)}>
          LogOut
        </button>
      ) : (
        <button className="btn btn-outline-primary font-bold font-sm">
          <Link to="/login">Login</Link>
        </button>
      )}
    </header>
  );
}

export { TopNav };
