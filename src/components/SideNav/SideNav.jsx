import React from "react";
import { NavLink } from "react-router-dom";
import "./SideNav.css";
import {
  MdOutlineExplore,
  MdOutlineWatchLater,
  MdPlaylistAdd,
  MdHistory,
} from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";

function SideNav() {
  const getActiveStyle = ({isActive}) => {
     return {isActive};
  };
  return (
    <div className="main-container">
      <ul>
        <li>
          <NavLink to="/" style={getActiveStyle}>
            <div className="sidenav-icon-pill">
              <AiOutlineHome size={25} />
              <p className="">Home</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/explore" style={getActiveStyle}>
            <div className="sidenav-icon-pill">
              <MdOutlineExplore size={25} />
              <p className="">Explore</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/liked" style={getActiveStyle}>
            <div className="sidenav-icon-pill">
              <BiLike size={25} />
              <p className="">Liked</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/watchlater" style={getActiveStyle}>
            <div className="sidenav-icon-pill">
              <MdOutlineWatchLater size={25} />
              <p className="">WatchLater</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/playlist" style={getActiveStyle}>
            <div className="sidenav-icon-pill">
              <MdPlaylistAdd size={25} />
              <p className="">Playlist</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/history" style={getActiveStyle}>
            <div className="sidenav-icon-pill">
              <MdHistory size={25} />
              <p className="">History</p>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export { SideNav };
