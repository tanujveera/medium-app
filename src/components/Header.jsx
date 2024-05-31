import React from "react";
import { MEDIUM_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-between p-4">
        <div className="pl-36">
          <img className="w-44" src={MEDIUM_LOGO} alt="Medium Logo" />
        </div>
        <div className="flex justify-evenly pr-36 font-medium">
          <div className="px-4 py-2 text-sm">Our Story</div>
          <div className="px-4 py-2 text-sm">Membership</div>
          <div className="px-4 py-2 text-sm">Write</div>
          <div className="px-4 py-2 text-sm">Sign in</div>
          <div className="">
            <button className="px-4 py-2 text-white bg-black rounded-full text-sm">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <hr className="border border-black opacity-50"></hr>
    </div>
  );
};

export default Header;
