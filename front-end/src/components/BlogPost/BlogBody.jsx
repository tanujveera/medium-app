import React from "react";
import user from "../../assets/user.svg"
import {useSelector} from "react-redux"
import DOMPurify from "dompurify"
import { parsePostData } from "../../utils/parsePostData";

const BlogBody = () => {
  const post = useSelector((store)=>store.post.singlePost);
  const content = parsePostData(post?.content)
  return (
    <div>
      <div className="text-5xl font-bold">{post?.title}</div>
      <div className="flex">
        <img src={user} alt="author" className="w-8 m-4" />
        <p className="my-4 font-bold">{post?.authorId}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content)}}>
      </div>
    </div>
  );
};

export default BlogBody;