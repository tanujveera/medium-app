import React from "react";
import { Link, useNavigate } from "react-router-dom";
import MediumRainbow from "../../assets/Medium Rainbow.jpeg";
import write from "../../assets/write.svg";
import notification from "../../assets/notification.svg";
import user from "../../assets/user.svg";
import { useDispatch } from "react-redux";
import { homePage, newStory } from "../../redux/storySlice";
import { logout } from "../../utils/API/emailAuth";

const HomePageHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleWriteClick = () => {
    dispatch(newStory(true));
    dispatch(homePage(false));
  };
  const handleLogout = async () => {
    // console.log("logout jsx");
    const response = await logout();
    if (response.data.msg === "Logged out successfully") {
      navigate("/");
    }

    console.log(response);
  };

  return (
    <div>
      <div className="flex justify-between p-4 bg-white">
        <div className="flex">
          <Link>
            <img
              className="w-32 ml-8 mr-14"
              src={MediumRainbow}
              alt="Medium Logo"
            />
          </Link>
          <input
            placeholder="  Search"
            className="border border-black rounded-full bg-slate-50"
          />
        </div>
        <div className="flex pr-16">
          <Link
            onClick={handleWriteClick}
            to="/app/new-story"
            className="mr-6 hover:cursor-pointer flex"
          >
            <img className="w-6" src={write} alt="Write" />
            <p className="pl-1 py-2">Write</p>
          </Link>
          <Link className="ml-2 mr-6 hover:cursor-pointer flex">
            <img className="w-6" src={notification} alt="notification" />
          </Link>
          <img
            className="w-8 hover:cursor-pointer"
            src={user}
            alt="user profile"
          />
          <button className="pl-2" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <hr className="border border-gray-500 opacity-50"></hr>
    </div>
  );
};

export default HomePageHeader;
