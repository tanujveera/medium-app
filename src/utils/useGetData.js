import { useDispatch, useSelector } from "react-redux";
import { api, pageData } from "./URL_Constants";
import { pageInfoData } from "../redux/headerStore";
import { useEffect } from "react";

const useGetData = () => {
  const dispatch = useDispatch();
  const getData = useSelector((store)=>store.header.pageInfo);

  const getPageData = async () => {
    const apiData = await fetch(api + pageData);
    const jsonData = await apiData?.json();
    const data = jsonData?.data;
    console.log(data)
    dispatch(pageInfoData(data))
  };

  useEffect(()=>{
    if(!getData){
      getPageData()
    }
  },[])
  return getData;
};

export default useGetData;
