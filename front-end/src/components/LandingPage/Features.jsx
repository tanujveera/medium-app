import React from "react";

const Features = (props) => {
  // console.log(props.featureData)
  const {number, heading,subHeading} = props.featureData;
  return (
    <div>
        <div>
          <div className="flex lg:mx-36 lg:h-[450px] md:mx-10 md:h-[220px]">
            <p className="lg:text-[300px] text-green-600 md:text-[100px]">{number}</p>
            <div className="lg:my-24 lg:mx-20 md:my-8 md:mx-12">
              <p className="lg:text-[80px] font-serif md:text-5xl">{heading}</p>
              <p className="lg:text-xl font-serif text-opacity-10">
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
