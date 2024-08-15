import React, { useEffect, useCallback } from "react";
import BlogBody from "./BlogBody";
import { useParams } from "react-router-dom";
import { getPost } from "../../utils/API/postsAPI";
import { useDispatch } from "react-redux";
import { postBlogData } from "../../redux/postSlice";

const BlogPost = () => {
  const {id} = useParams();
  const dispatch = useDispatch();

  const handlePost = useCallback(async (id) => {
    if(id !== undefined || id !== null){
      const response = await getPost(id);
      console.log(response);
      dispatch(postBlogData(response?.data?.post));
    }
    },[dispatch]);

  useEffect(() => {
    handlePost(id);
  }, [handlePost, id]);

  return (
    <div className="m-10">
      <BlogBody />
    </div>
  );
};

export default BlogPost;
