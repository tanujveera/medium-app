import React from 'react'
import { api, pageData } from './URL_Constants';

const useGetData = async()=>{
  const apiData = await fetch(api+pageData)
  const {data} = await apiData.json();
  
}

export default useGetData