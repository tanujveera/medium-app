import React from "react";
import AboutHeader from "./AboutHeader";
import AboutFooter from "./AboutFooter";
import PageTitle from "../../utils/PageTitle";
import AboutBody from "./AboutBody";
import { useSelector } from "react-redux";
import SignIn from "../Auth/SignIn";

const About = () => {
  const loginModalStore = useSelector((store) => store.header.isLoginModal);
  return (
    <div>
      <PageTitle title="About Medium" />
      {loginModalStore && (
        <div className="z-20 fixed inset-0 bg-opacity-5 backdrop-blur-sm items-center">
          <SignIn />
        </div>
      )}
      <AboutHeader />
      <AboutBody />
      <AboutFooter />
    </div>
  );
};

export default About;
