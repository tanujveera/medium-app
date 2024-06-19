import React from "react";
import user from "../../assets/user.svg"

const HomePost = () => {
  return (
    <div className="shadow-xl mx-[400px] py-32 mt-4">
      <img src={user} alt="author" className="w-8" />
    </div>
  );
};

export default HomePost;
