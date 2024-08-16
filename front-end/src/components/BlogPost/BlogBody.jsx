import React from "react";
import user from "../../assets/user.svg"
import {useSelector} from "react-redux"
import DOMPurify from "dompurify"

const BlogBody = () => {
  const post = useSelector((store)=>store.post.singlePost); 

  return (
    <div>
      <div className="text-5xl font-bold">{post?.title}</div>
      <div>
        <img src={user} alt="author" className="w-8 m-4" />
        <p>{post?.authorId}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post?.content)}}>
      </div>
    </div>
  );
};

export default BlogBody;