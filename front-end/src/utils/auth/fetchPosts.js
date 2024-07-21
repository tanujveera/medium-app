import axiosInstance from "./axiosInstance";

export const fetchPosts = async ()=>{
  const response = await axiosInstance.get("/blog/allposts");
  return response; 
}