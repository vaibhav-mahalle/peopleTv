import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/Auth/context";

function RequiresAuth({ children }) {
  const { auth } = useAuth();
  const { isLoggedIn } = auth;
  const location = useLocation();

  return isLoggedIn ? (children) : (<Navigate to="/login" state={{from:location}} replace />);
}

export {RequiresAuth};
