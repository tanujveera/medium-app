import React from "react";
import user from "../../assets/user.svg"
import {useSelector} from "react-redux"
import { parse } from "flatted"

const BlogBody = () => {
  const post = useSelector((store)=>store.post.singlePost);
  console.log(post);

  return (
    <div>
      <div className="text-5xl font-bold">{post?.title}</div>
      <div>
        <img src={user} alt="author" className="w-8 m-4" />
        <p>{post?.authorId}</p>
      </div>
      
    </div>
  );
};

export default BlogBody;