import React from "react";
import user from "../../assets/user.svg";

const HomePost = () => {
  return (
    <div className=" shadow-xl mx-[400px] h-[200px] mt-4 flex">
      <div className="w-3/4 border-r-2">
        <div className="flex">
          <img src={user} alt="author" className="w-8 m-4" />
          <p className="my-4">Author</p>
        </div>
        <div className="ml-4 text-2xl font-bold">Medium Article heading</div>
        <div className="ml-4 text-base text-gray-500">
          Medium Article Description
        </div>
      </div>
      <div className="mx-auto my-auto">
      <img src={user} alt="author" className="w-20 m-4" />
      </div>
    </div>
  );
};

export default HomePost;
