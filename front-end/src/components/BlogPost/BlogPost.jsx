import React from "react";
import BlogBody from "./BlogBody";
import { useParams } from "react-router-dom";
import usePostRender from "../../utils/hooks/usePostRender";

const BlogPost = () => {
  const {id} = useParams();
  console.log(id);
  usePostRender(id);

  return (
    <div className="m-10">
      <BlogBody />
    </div>
  );
};

export default BlogPost;
