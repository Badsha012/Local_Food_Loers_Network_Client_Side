
import React from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ user, children }) => {
  // If user is not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  // Otherwise render the protected component
  return children;
};

export default ProtectedRoute;
