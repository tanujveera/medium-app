import React from "react";
import { LANDING_PAGE } from "../utils/constants";

const Body = () => {
  return (
    <div className="flex justify-evenly">
      <div className="grid grid-cols-1">
        <span>Human</span>
        <span>stories & ideas</span>
        <span>A place to read, write, and deepen your understanding</span>
        <button>Get Started</button>
      </div>
      <div>
        <img className="w-2/4" src={LANDING_PAGE} alt="Landing Page" />
      </div>
    </div>
  );
};

export default Body;
