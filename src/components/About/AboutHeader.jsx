import React from "react";
import { MEDIUM_LOGO_WHITE } from "../../utils/constants";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginModal } from "../../redux/headerStore";

const AboutHeader = () => {
  const dispatch = useDispatch();
  const handleModal = () => {
    dispatch(loginModal());
  };

  return (
    <div>
      <div className="flex justify-between p-6 bg-black">
        <div>
          <Link to="/">
          <img className="w-44" src={MEDIUM_LOGO_WHITE} alt="Medium Logo" />
          </Link>
        </div>
        <div className="flex">
          <div className="mr-6 text-gray-200 rounded-full border border-white px-4 py-2 hover:text-white cursor-pointer" onClick={handleModal}>Sign in</div>
          <div className=" text-black rounded-full bg-slate-200 px-4 py-2 hover:bg-white cursor-pointer" onClick={handleModal}>Sign up</div>
        </div>
      </div>
      <hr className="border border-gray-500 opacity-50"></hr>
    </div>
  );
};

export default AboutHeader;
