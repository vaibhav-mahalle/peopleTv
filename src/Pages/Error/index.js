import { Link } from "react-router-dom";
import React from "react";
Link

function PageNotFound() {
  return (
    <div className="msg-container txt-xlg">
      Looks like you lost your way
      <Link to="/" className="txt-white-color p-l-1">
        Go Back
      </Link>
    </div>
  );
}

export { PageNotFound };
