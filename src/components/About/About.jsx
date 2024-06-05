import React from "react";
import AboutHeader from "./AboutHeader";
import AboutFooter from "./AboutFooter";
import PageTitle from "../../utils/PageTitle";
import AboutBody from "./AboutBody";

const About = () => {
  return (
    <div>
      <PageTitle title="About Medium" />
      <AboutHeader />
      <AboutBody />
      <AboutFooter />
    </div>
  );
};

export default About;
