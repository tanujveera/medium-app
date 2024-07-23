import React from "react";
import user from "../../assets/user.svg";

const HomePost = (props) => {
  const {title, content, authorId} = props.data;
  console.log(props.data)
  return (
      <div className="shadow-xl lg:mx-[400px] h-[200px] mt-4 flex md:mx-10 lg:mb-8 md:mb-12">
        <div className="w-3/4 border-r-2">
          <div className="flex">
            <img src={user} alt="author" className="w-8 m-4" />
            <p className="my-4">{authorId}</p>
          </div>
          <div className="ml-4 text-2xl font-bold">{title}</div>
          <div className="ml-4 text-base text-gray-500">
            {content}
          </div>
        </div>
        <div className="mx-auto my-auto">
          <img src={user} alt="author" className="w-20 m-4" />
        </div>
      </div>
  );
};

export default HomePost;
