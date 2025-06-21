import React, { useContext } from "react";
import { AuthContextType } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ element }) => {
  const { user } = useContext(AuthContextType);

  return user ? element : <Navigate to="/login" />;
};

export default PrivateRoutes;
