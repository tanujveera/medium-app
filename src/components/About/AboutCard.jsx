import React from "react";

const AboutCard = (props) => {
  const { id, data } = props.data;
  return (
    <div>
      <div
        className="text-white font-serif py-20 flex justify-between hover:cursor-pointer hover:text-black hover:bg-white"
        key={id}
      >
        <p className="text-7xl pl-8">{data}</p>
        <p className="text-7xl pr-8">→</p>
      </div>
      <hr className="border border-white opacity-50"></hr>
    </div>
  );
};

export default AboutCard;
