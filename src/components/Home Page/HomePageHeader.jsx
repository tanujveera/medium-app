import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MediumRainbow from "../../assets/Medium Rainbow.jpeg"
import write from "../../assets/write.svg"
import notification from "../../assets/notification.svg"
import user from "../../assets/user.svg"
import { useDispatch, useSelector } from "react-redux";
import { homePage, newStory } from "../../redux/storySlice";

const HomePageHeader = () => {
  const dispatch = useDispatch();
  const storyPage = useSelector((store)=>store.story.isStory)
  const handleWriteClick = () =>{
    dispatch(newStory(true))
    dispatch(homePage(false))
  }
  useEffect(()=>{
    console.log(storyPage)
  },[storyPage])
  return (
    <div>
      <div className="flex justify-between p-4 bg-white">
        <div>
          <Link to="/">
            <img className="w-32" src={MediumRainbow} alt="Medium Logo" />
          </Link>
        </div>

        {<div className="flex">
          <Link onClick={handleWriteClick} className="mr-6 hover:cursor-pointer flex">
            <img className="w-6" src={write} alt="Write"/>
            <p className="pl-1 py-1">Write</p>
          </Link>
          <Link className="mr-6 hover:cursor-pointer flex">
            <img className="w-6" src={notification} alt="notification"/>
          </Link>
          <img className="w-8 hover:cursor-pointer" src={user} alt="user profile"/>
        </div>}
      </div>
      <hr className="border border-gray-500 opacity-50"></hr>
    </div>
  );
};

export default HomePageHeader;
