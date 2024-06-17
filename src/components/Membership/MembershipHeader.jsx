import React from "react";
import { Link } from "react-router-dom";
import MediumRainbow from "../../assets/Medium Rainbow.jpeg"
import write from "../../assets/write.svg"

const MembershipHeader = () => {
  return (
    <div>
      <div className="flex justify-between p-6 bg-white">
        <div>
          <Link to="/">
            <img className="w-32" src={MediumRainbow} alt="Medium Logo" />
          </Link>
        </div>
        <div className="flex">
          <Link className="mr-6  hover:cursor-pointer flex">
            <img className="w-6" src={write} alt="Write"/>
            <p className="pl-1 py-1">Write</p>
          </Link>
          <div className=" ">
            <img src="" alt="notification"/>
          </div>
        </div>
      </div>
      <hr className="border border-gray-500 opacity-50"></hr>
    </div>
  );
};

export default MembershipHeader;
