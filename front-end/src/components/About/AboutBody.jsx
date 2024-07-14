import React, {useEffect} from 'react'
import AboutCard from './AboutCard'
import { useDispatch, useSelector } from "react-redux";
import handleGetData from '../../utils/handleGetData';
import { ABOUT } from '../../utils/URL_Constants';
import { aboutCards } from '../../utils/constants';
import { aboutData } from '../../redux/headerStore';

const AboutBody = () => {
  const dispatch = useDispatch();
  const aboutAPI = useSelector((store)=>store.header.about)
  // console.log(aboutAPI);
  useEffect(() => {
    handleGetData(ABOUT,dispatch,aboutData)
  }, [])
  
  return (
    <div className="bg-black">
    <div className="lg:w-1/2 text-white pl-10 lg:pb-32 md:w-5/6 md:pb-12">
      <p className="lg:text-8xl font-serif lg:pt-36 md:text-6xl md:pt-24">{aboutAPI?.aboutData?.heading1}</p>
      <p className="pt-16 text-xl font-serif">{aboutAPI?.aboutData?.heading2}</p>
      <p className="pt-4 text-xl font-serif pb-10">{aboutAPI?.aboutData?.heading3}</p>
      <div className="lg:text-3xl md:text-xl">
        <p className=" bg-slate-200 bg-opacity-50 inline-grid">
          Ultimately, our goal is to deepen our collective
        </p>
        <p className=" bg-slate-200 bg-opacity-50 mt-1 inline-grid">
          understanding of the world through the power of{" "}
        </p>
        <p className=" bg-slate-200 bg-opacity-50 mt-1 inline-grid">writing.</p>
      </div>
      <p className="pt-10 text-xl font-serif">{aboutAPI?.aboutData?.heading4}</p>
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
  )
}

export default AboutBody