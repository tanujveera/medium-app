import React from "react";
import AboutHeader from "./AboutHeader";
import { aboutCards, aboutData } from "../../utils/constants";
import AboutCard from "./AboutCard";
import AboutFooter from "./AboutFooter";

const About = () => {
  return (
    <div>
      <AboutHeader />
      <div className="bg-black">
        <div className="w-1/2 text-white pl-10 pb-32">
          <p className="text-8xl font-serif pt-36">{aboutData.heading1}</p>
          <p className="pt-16 text-xl font-serif">{aboutData.heading2}</p>
          <p className="pt-4 text-xl font-serif pb-10">{aboutData.heading3}</p>
          <div className="text-3xl">
            <p className=" bg-slate-200 bg-opacity-50 ">
              Ultimately, our goal is to deepen our collective
            </p>
            <p className=" bg-slate-200 bg-opacity-50 mt-1 ">
              understanding of the world through the power of{" "}
            </p>
            <p className=" bg-slate-200 bg-opacity-50 mt-1">writing.</p>
          </div>
          <p className="pt-10 text-xl font-serif">{aboutData.heading4}</p>
          <p className="pt-4 text-xl font-serif">
            Instead of selling ads or selling your data, we’re supported by a
            growing community of Medium members who align with our mission. If
            you’re new here, start exploring. Dive deeper into whatever matters
            to you. Find a post that helps you learn something new, or
            reconsider something familiar—and then share your own story.
          </p>
        </div>
        <hr className="border border-white opacity-50"></hr>
        {aboutCards.map((card) => (
        <AboutCard data = {card} key ={card.id}/>
      ))}
      </div>
      <AboutFooter/>
    </div>
  );
};

export default About;
