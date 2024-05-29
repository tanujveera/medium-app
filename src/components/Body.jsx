import React from "react";
import { LANDING_PAGE } from "../utils/constants";

const Body = () => {
  return (
    <div className="">
      <div className="flex justify-between -mt-8 h-[575px]">
        <div className="w-4/6 pl-44 pt-20">
          <p className="text-9xl font-serif">Human</p>
          <p className="text-9xl font-serif pb-6">stories & ideas</p>
          <p className="text-2xl pb-10">
            A place to read, write, and deepen your understanding
          </p>
          <button className="text-xl text-white bg-black rounded-full w-48 h-10">
            Get started
          </button>
        </div>
        <div className="w-[450px] h-[640px]">
          <img className="" src={LANDING_PAGE} alt="Landing Page" />
        </div>
      </div>
      <hr className="border border-black opacity-50"></hr>
    </div>
  );
};

export default Body;
