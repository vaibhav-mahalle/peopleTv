import MockAPI from "../MockAPI";
import { Routes, Route } from "react-router-dom";
import React from "react";
import {
  PageNotFound,
  Explore,
  History,
  Home,
  Liked,
  Playlist,
  WatchLater,
  VideoPage,
  Login,
  Signup,
} from "../Pages";

export const RouterPath = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/mockman" element={<MockAPI />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
