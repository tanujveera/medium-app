// ProtectedRoute.js
import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Error from "./Error"
import useCheckAuthStatus from "./hooks/useCheckAuthStatus";

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  useCheckAuthStatus();

  // useEffect(() => {
  //   setTimeout(()=>{
  //     if (!isAuthenticated) {
  //       console.log(isAuthenticated);
  //       navigate("/login");
  //     }
  //   },2000)
  // }, [isAuthenticated, loading, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Error/>;
};

export default ProtectedRoute;