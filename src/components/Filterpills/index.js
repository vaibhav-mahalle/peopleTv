import React from "react";
import "./Filterpills.css";
import { useVideo } from "../../context";

const categoryFilters = [
  { id: 1, categoryName: "ALL" },
  { id: 2, categoryName: "Norm" },
  { id: 3, categoryName: "Ricky" },
  { id: 4, categoryName: "Sumit" },
  { id: 5, categoryName: "Upmanyu" },
];

export const Filterpills = () => {
  const { videoState, videoDispatch } = useVideo();

  return (
    <div className="align-filters-grid">
      {categoryFilters.map(({ id, categoryName }) => (
        <div
          className={videoState.category === categoryName ? `align-content filled-filter-pill `: `align-content filter-pill`}
          key={id}
          onClick={() =>
            videoDispatch({ type: "FILTER_BY_CATEGORY", payload: categoryName })
          }
        >
          {categoryName}
        </div>
      ))}
    </div>
  );
};
