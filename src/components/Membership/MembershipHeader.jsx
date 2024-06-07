import React from "react";
import { Link } from "react-router-dom";
import { MEDIUM_LOGO } from "../../utils/constants";

const MembershipHeader = () => {
  return (
    <div>
      <div className="flex justify-between p-6 bg-white">
        <div>
          <Link to="/">
            <img className="w-44" src={MEDIUM_LOGO} alt="Medium Logo" />
          </Link>
        </div>
        <div className="flex">
          <div className="mr-6 text-black rounded-full border border-black px-4 py-2 hover:cursor-pointer">
            Sign in
          </div>
          <div className=" text-white rounded-full bg-black px-4 py-2 hover:cursor-pointer">
            Sign up
          </div>
        </div>
      </div>
      <hr className="border border-gray-500 opacity-50"></hr>
    </div>
  );
};

export default MembershipHeader;
