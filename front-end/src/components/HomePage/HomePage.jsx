import React from "react";
import HomePageHeader from "./HomePageHeader"
import HomePageBody from "./HomePageBody"
import { useFetchAllPosts } from "../../utils/hooks/useFetchAllPosts";

const HomePage = () => {
  useFetchAllPosts();
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
