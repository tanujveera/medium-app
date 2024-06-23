import React from "react";
import HomePageHeader from "./HomePageHeader"
import HomePageBody from "./HomePageBody"

const HomePage = () => {
  return (
    <div>
      <div className="sticky top-0 w-full z-10">
       <HomePageHeader/>
      </div>
      <HomePageBody/>
    </div>
  );
};

export default HomePage;
