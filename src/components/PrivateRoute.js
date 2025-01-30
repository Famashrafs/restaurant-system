import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Correctly import AuthContext

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);  // Get the user from context

  if (!user) {
    // If the user is not authenticated, redirect them to the login page
    return <Navigate to="/login" />;
  }

  // If the user is authenticated, render the children (Dashboard)
  return children;
};

export default PrivateRoute;
