import React from "react";

const Features = (props) => {
  // console.log(props.featureData)
  const {number, heading,subHeading} = props.featureData;
  return (
    <div>
        <div>
          <div className="flex mx-36 h-[500px]">
            <p className="text-[300px] text-green-600">{number}</p>
            <div className="my-24 mx-20">
              <p className="text-[80px] font-serif">{heading}</p>
              <p className="text-xl font-serif text-opacity-10">
                {subHeading}
              </p>
            </div>
          </div>
          <hr className="border border-black opacity-50"></hr>
        </div>
    </div>
  );
};

export default Features;
