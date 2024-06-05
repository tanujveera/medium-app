import React from "react";
import { MEDIUM_LOGO } from "../../utils/constants";

const AboutFooter = () => {
  return (
    <div className="flex justify-between p-6 bg-white">
      <div>
        <img className="w-44" src={MEDIUM_LOGO} alt="Medium Logo" />
      </div>
      <div className="flex">
        <p className="pl-2 text-gray-600 text-xs pt-4">About</p>
        <p className="pl-2 text-gray-600 text-xs pt-4">Terms</p>
        <p className="pl-2 text-gray-600 text-xs pt-4">Privacy</p>
        <p className="pl-2 text-gray-600 text-xs pt-4">Help</p>
        <p className="pl-2 text-gray-600 text-xs pt-4">Teams</p>
        <p className="pl-2 text-gray-600 text-xs pt-4">press</p>
      </div>
    </div>
  );
};

export default AboutFooter;
