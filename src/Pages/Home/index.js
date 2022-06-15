import React from "react";
import { CategoryBox, HomeBanner } from "../../components";

function Home() {
  return (
    <>
      <div className="home-container">
        <div>
          <HomeBanner />
        </div>
        <div className="txt-xxlg align-content p-1">Categories</div>
        <div className="align-content">
          <CategoryBox />
        </div>
      </div>
    </>
  );
}

export { Home };
