import MockAPI from "../MockAPI";
import { Routes, Route } from "react-router-dom";
import React from "react";
import {
  PageNotFound,
  Explore,
  History,
  Home,
  Liked,
  PlayList,
  WatchLater,
  VideoPage,
  Login,
  Signup,
} from "../Pages";
import { RequiresAuth } from "../components";

export const RouterPath = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/mockman" element={<MockAPI />} />
      <Route path="/videopage/:videoId" element={<VideoPage/>} />

      <Route
        path="/liked"
        element={
          <RequiresAuth>
            <Liked />
          </RequiresAuth>
        }
      />
      <Route
        path="/history"
        element={
          <RequiresAuth>
            <History />
          </RequiresAuth>
        }
      />
      <Route
        path="/playlist"
        element={
          <RequiresAuth>
            <PlayList />
          </RequiresAuth>
        }
      />
      <Route
        path="/watchlater"
        element={
          <RequiresAuth>
            <WatchLater />
          </RequiresAuth>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
