import { Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../components/AuthProvider";

const PrivateRoute = ({ children, ...rest }: any) => {
  let { user } = useContext(AuthContext);

  return !user ? <Navigate to="/login" /> : children;
};

export default PrivateRoute;
