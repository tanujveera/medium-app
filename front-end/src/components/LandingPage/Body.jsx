import React from "react";
import { LANDING_PAGE } from "../../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="">
      <div className="flex justify-between lg:-mt-8 lg:h-[575px] md:h-[350px]">
        <div className="lg:w-4/6 lg:pl-44 lg:pt-20 sm:pl-24 sm:pt-14">
          <p className="lg:text-9xl font-serif sm:text-5xl">Human</p>
          <p className="lg:text-9xl font-serif pb-6 sm:text-5xl">stories & ideas</p>
          <p className="md:text-2xl pb-10 sm:text-lg">
            A place to read, write, and deepen your understanding
          </p>
          <Link to="/login">
            <button
              className="lg:text-xl text-white bg-black rounded-full lg:w-48 h-10 sm:text-lg sm:w-36"
            >
              Get started
            </button>
          </Link>
        </div>
        <div className="w-[450px] h-[640px] md:h-[300px] md:w-[410px]">
          <img className="" src={LANDING_PAGE} alt="Landing Page" />
        </div>
      </div>
      <hr className="border border-black opacity-50"></hr>
    </div>
  );
};

export default Body;
