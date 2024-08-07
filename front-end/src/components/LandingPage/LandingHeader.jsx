import React, { useEffect, useCallback } from "react";
import { MEDIUM_LOGO } from "../../utils/constants";
import { Link } from "react-router-dom";
import { checkAuthStatus } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
// import { loginModal } from "../../redux/headerStore";

const LandingHeader = () => {
  const dispatch = useDispatch();
  // const handleModal = () => {
  //   dispatch(loginModal());
  // };
  const checkAuth = useCallback(async () => {
    const response = await dispatch(checkAuthStatus());
    console.log(response);
  },[dispatch]);
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  return (
    <div className="bg-white">
      <div className="flex justify-between p-4">
        <div className="lg:pl-36 md:pl-10">
          <img className="w-44 md:w-28" src={MEDIUM_LOGO} alt="Medium Logo" />
        </div>
        <div className="flex justify-evenly lg:pr-36 md: font-medium">
          <Link to="/about" className="px-4 py-2 text-sm">
            Our Story
          </Link>
          <Link className="px-4 py-2 text-sm">Membership</Link>
          <Link to="/login" className="px-4 py-2 text-sm">
            Write
          </Link>
          <Link to="/login" className="px-4 py-2 text-sm">
            Sign in
          </Link>
          <Link to="/login">
            <button className="px-4 py-2 text-white bg-black rounded-full text-sm">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <hr className="border border-black opacity-50"></hr>
    </div>
  );
};

export default LandingHeader;
