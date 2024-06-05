import React from "react";
// import Header from "./Header";
import Body from "./Body";
import Features from "./Features";
import Footer from "./Footer";
import LandingHeader from "./LandingHeader";
import { aboutFeatures } from "../../utils/constants";
import PageTitle from "../../utils/PageTitle";

const LandingPage = () => {
  return (
    <div>
      <PageTitle title="Medium – Where good ideas find you." />
      <div className="sticky top-0 w-full z-10">
        <LandingHeader />
      </div>
      <div className="">
        <Body />
        {aboutFeatures.map((feature) => (
          <Features key={feature.id} featureData={feature} />
        ))}
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
