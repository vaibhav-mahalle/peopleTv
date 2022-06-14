import React from "react";
import { Filterpills, VideoList } from "../../components";
import { VideoItem } from "../../components/VideoItem/VideoItem";
import { useAxios } from "../../hooks";

export const Explore = () => {
  return (
    <div>
      <div className="m-b-1"><Filterpills/></div>
      <VideoList />
    </div>
  );
}

