import React, { useEffect, useCallback } from "react";
import BlogBody from "./BlogBody";
import { useParams } from "react-router-dom";
import { getPost } from "../../utils/API/postsAPI";
import { useDispatch } from "react-redux";
import { renderPosts } from "../../redux/postSlice";

const BlogPost = () => {
  const param = useParams();
  const dispatch = useDispatch();
  console.log(param);

  const handlePost = useCallback(
    async (id) => {
      const response = await getPost(id);
      dispatch(renderPosts(response));
    },
    [dispatch]
  );

  useEffect(() => {
    handlePost();
  }, [handlePost]);
  
  return (
    <div className="m-10">
      <BlogBody />
    </div>
  );
};

export default BlogPost;
