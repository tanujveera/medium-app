import React from "react";
import "../../App.css";
import HomePost from "./HomePost";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"

const HomePageBody = () => {
  const postsStore = useSelector((store) => store.post.postsData);
  console.log(postsStore);
  return (
      <div className="mx-auto">
        {postsStore && (postsStore?.map((item)=>(
          <Link key={item.id} to={"/app/post/"+item.id}>
            <HomePost key={item.id} data = {item}/>
          </Link>
        )))}
      </div>
  );
};

export default HomePageBody;
