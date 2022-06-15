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
      <div className="flex-row">
        <AiOutlineMenu size={35} />
        <Link to={"/"}>
          <div className="brand-image-container">
            <img
              src={
                "https://ik.imagekit.io/j6wafbf7rcj/PeopleTv/vl-pics/Screenshot__122__YsGhLDZPo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655207508576"
              }
              alt="Brand-logo"
            />
          </div>
        </Link>
      </div>
      {isLoggedIn ? (
        <button
          className="btn btn-outline-primary font-bold font-sm"
          onClick={() => logoutHandler(authDispatch, navigate)}
        >
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
