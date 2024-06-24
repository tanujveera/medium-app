import React, { useEffect } from "react";
import Body from "./Body";
import Features from "./Features";
import Footer from "./Footer";
import LandingHeader from "./LandingHeader";
import PageTitle from "../../utils/PageTitle";
import useGetData from "../../utils/useGetData.js";
import { useDispatch, useSelector } from "react-redux";
import { api, pageData } from "../../utils/URL_Constants.js";
import { pageInfoData } from "../../redux/headerStore.js";

const LandingPage = () => {
  const data = useGetData();
  const dispatch = useDispatch();
  const dataAPI = useSelector((store)=>store.header.pageInfo)
  console.log(dataAPI);
  const getPageData = async () => {
    const apiData = await fetch(api + pageData);
    const jsonData = await apiData.json();
    const data = jsonData.data;
    // console.log(data)
    dispatch(pageInfoData(data))
  }
  console.log(dataAPI);
  useEffect(()=>{
    getPageData()
  },[])
  console.log(data);
  // console.log(dataAPI);
  return (
    <div>
      <PageTitle title="Medium – Where good ideas find you." />
      <div className="sticky top-0 w-full z-10">
        <LandingHeader />
      </div>
      <div className="">
        <Body />
        {dataAPI?.aboutFeatures?.map((feature) => (
          <Features key={feature.id} featureData={feature} />
        ))}
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
