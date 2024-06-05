import React from "react";
import { MEDIUM_LOGO } from "../../utils/constants";
import { Link } from "react-router-dom";

const landingHeader = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-between p-4">
        <div className="pl-36">
          <img className="w-44" src={MEDIUM_LOGO} alt="Medium Logo" />
        </div>
        <div className="flex justify-evenly pr-36 font-medium">
          <Link to="/about" className="px-4 py-2 text-sm">Our Story</Link>
          <Link className="px-4 py-2 text-sm">Membership</Link>
          <Link className="px-4 py-2 text-sm">Write</Link>
          <Link className="px-4 py-2 text-sm">Sign in</Link>
          <Link className="">
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

export default landingHeader;
