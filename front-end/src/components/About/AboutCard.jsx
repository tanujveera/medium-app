import React from "react";

const AboutCard = (props) => {
  const { id, data } = props.data;
  return (
    <div>
      <div
        className="text-white font-serif lg:py-20 flex justify-between transition-colors duration-300 ease-in-out md:py-10 hover:cursor-pointer hover:text-black hover:bg-white"
        key={id}
      >
        <p className="lg:text-7xl pl-8 md:text-5xl">{data}</p>
        <p className="lg:text-7xl pr-8 md:text-5xl">→</p>
      </div>
      <hr className="border border-white opacity-50"></hr>
    </div>
  );
};

export default AboutCard;
