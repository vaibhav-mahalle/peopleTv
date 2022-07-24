import "./CategoryBox.css";
import { Link } from "react-router-dom";
import React from "react";
import { useAxios } from "../../hooks";
import { useVideo } from "../../context";


export const CategoryBox = () => {

    const {loadingData, responseData, errorData} = useAxios(`/api/categories`);
    const {videoDispatch} = useVideo();

    const categories = responseData.categories || [];
  return (
    <div className="align-content-grid">
        {categories.map(({_id, categoryName, thumbnail}) => (<div key={_id} className="category-box-container" onClick={()=> videoDispatch({type:"FILTER_BY_CATEGORY",payload:categoryName})}>
          <Link to={"/explore"} className="thumbnail-container">
            <img
              src={
                thumbnail
              }
              alt={categoryName}
            />
          </Link>
          <p className="align-content txt-lg">{categoryName}</p>
        </div>))}
    </div>
  );
};
