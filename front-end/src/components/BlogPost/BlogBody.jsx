import React from "react";
import user from "../../assets/user.svg"

const BlogBody = () => {

  return (
    <div>
      <div className="text-5xl font-bold">Title</div>
      <div>
        <img src={user} alt="author" className="w-8 m-4" />
        <p>{}</p>
      </div>
    </div>
  );
};

export default BlogBody;