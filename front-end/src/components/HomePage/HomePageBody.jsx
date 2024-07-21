import React from "react";
import "../../App.css";
import HomePost from "./HomePost";
import { useSelector } from "react-redux";

const HomePageBody = () => {
  const postsStore = useSelector((store) => store.post.postsData);
  console.log(postsStore);
  return (
      <div className="mx-auto">
        {postsStore && (postsStore?.map((item)=>(
          <HomePost key={item.id} data = {item}/>
        )))}
      </div>
  );
};

export default HomePageBody;
