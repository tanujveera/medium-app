import axiosInstance from "./axiosInstance";

export const fetchPosts = async ()=>{
  const response = await axiosInstance.get("/blog/allposts");
  return response; 
}

export const publishPost = async (data)=>{
  const response = await axiosInstance.post("/blog/posts");
  return response;
}