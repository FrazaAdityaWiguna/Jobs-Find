import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const googleId = useSelector((state) => state.googleId);
  const jwt = localStorage.getItem(`jwt-${googleId}`);

  return <> {jwt ? children : <Navigate to="/" />}</>;
};

export default PrivateRoute;
