import React from "react";
import { aboutFeatures } from "../utils/constants";

const Features = () => {
  // console.log(aboutFeatures)
  return (
    <div>
      {aboutFeatures.map((feature) => (
        <div>
          <div className="flex mx-36 h-[500px]">
            <p className="text-[300px] text-green-600" key={feature.id}>{feature.number}</p>
            <div className="my-24 mx-20">
              <p className="text-[80px] font-serif">{feature.heading}</p>
              <p className="text-[80px] font-serif">{feature.headingPart}</p>
              <p className="text-xl font-serif text-opacity-10">
                {feature.subHeading}
              </p>
            </div>
          </div>
          <hr className="border border-black opacity-50"></hr>
        </div>
      ))}
      <div className="bg-green-500 text-7xl w-full text-white hover:rounded-full">
        <div className="justify-center font-serif py-20 flex ">
          <p className="">Unlock a world of wisdom </p> 
          <p className="">{"->"}</p>
        </div>
        <hr className="border border-black opacity-50"></hr>
      </div>
    </div>
  );
};

export default Features;
