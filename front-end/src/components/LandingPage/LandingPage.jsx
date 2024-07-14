import React, { useEffect } from "react";
import Body from "./Body";
import Features from "./Features";
import Footer from "./Footer";
import LandingHeader from "./LandingHeader";
import PageTitle from "../../utils/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { LANDING } from "../../utils/URL_Constants.js";
import { pageInfoData } from "../../redux/headerStore.js";
import handleGetData from "../../utils/handleGetData";

const LandingPage = () => {
  const dispatch = useDispatch();
  const dataAPI = useSelector((store)=>store.header.landing)
  console.log(dataAPI);

  useEffect(()=>{
    handleGetData(LANDING,dispatch,pageInfoData)
  },[])

  return (
    <div>
      <PageTitle title="Medium – Where good ideas find you." />
      <div className="sticky top-0 w-full z-10">
        <LandingHeader />
      </div>
      <div className="">
        <Body />
        {dataAPI?.landingFeatures?.map((feature) => (
          <Features key={feature.id} featureData={feature} />
        ))}
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
