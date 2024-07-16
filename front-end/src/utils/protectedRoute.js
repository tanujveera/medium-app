// ProtectedRoute.js
import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { checkAuthStatus } from "../redux/authSlice";
import Error from "./Error"
import useCheckAuthStatus from "./hooks/useCheckAuthStatus";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return isAuthenticated ? <Outlet /> : <Error/>;
};

export default ProtectedRoute;