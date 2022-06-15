import React from "react";
import { Filterpills, VideoList } from "../../components";

export const Explore = () => {
  return (
    <div>
      <div className="m-b-1">
        <Filterpills />
      </div>
      <VideoList />
    </div>
  );
};
