import { API } from "./URL_Constants";

const handleGetData = async(endPoint, dispatch, func) => {
  const apiData = await fetch(API + endPoint);
    const jsonData = await apiData.json();
    const data = jsonData.data;
    // console.log(data)
    dispatch(func(data));
}

export default handleGetData;