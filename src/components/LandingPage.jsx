import React from "react";
// import Header from "./Header";
import Body from "./Body";
import Features from "./Features";
import Footer from "./Footer";
import LandingHeader from "./LandingHeader";

const LandingPage = () => {
  return (
    <div>
      <div className="sticky top-0 w-full z-10">
      <LandingHeader />
      </div>      
      <div className="">
        <Body />
        <Features />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
