import React from "react";
import Header from "./Header";
import Body from "./Body";
import Features from "./Features";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div>
      <div className="sticky top-0 w-full">
      <Header />
      </div>
      
      <div>
        <Body />
        <Features />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
