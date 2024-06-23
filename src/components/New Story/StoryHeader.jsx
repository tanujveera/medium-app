import React from "react";
import { Link } from "react-router-dom";
import MediumRainbow from "../../assets/Medium Rainbow.jpeg";
import notification from "../../assets/notification.svg";
import user from "../../assets/user.svg";

const StoryHeader = () => {
  return (
    <div>
      <div className="flex justify-between p-4 bg-white pl-44">
        <div>
          <Link to="/home">
            <img className="w-32" src={MediumRainbow} alt="Medium Logo" />
          </Link>
        </div>
        <div className="flex pr-24">
          {/* <Link className="text-white bg-green-500 px-4 py-1 rounded-full ml-2">Publish</Link> */}
          <Link to="/home" className="m-2">Home</Link>
          <Link className="ml-2 mr-6 hover:cursor-pointer flex">
            <img className="w-6" src={notification} alt="notification" />
          </Link>
          <img
            className="w-8 hover:cursor-pointer"
            src={user}
            alt="user profile"
          />
        </div>
      </div>
      <hr className="border border-gray-500 opacity-50"></hr>
    </div>
  );
};

export default StoryHeader;
