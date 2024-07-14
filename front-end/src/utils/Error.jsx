import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="my-44">
      <div className="flex justify-center text-5xl font-bold font-serif mb-8">
        There seems to be some Error
      </div>
      <div className="flex justify-center">
        <Link to="/">
          <button className="border border-black rounded-full p-4 text-xl font-bold font-serif hover:bg-black hover:text-white">
            Landing Page
          </button>
        </Link>
        <Link to="/login">
          <button className="text-xl border border-black rounded-full font-bold mx-4 p-4 font-serif hover:bg-black hover:text-white">
            Login Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
