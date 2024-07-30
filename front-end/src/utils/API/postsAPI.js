import axiosInstance from "./axiosInstance";

export const fetchPosts = async ()=>{
  const response = await axiosInstance.get("/blog/allposts");
  return response; 
}

export const publishPost = async (title,data)=>{
  const response = await axiosInstance.post("/blog/posts",{title,content:data,published:true});
  return response;
}

export const getPost = async (id)=>{
  const response = await axiosInstance.get("/blog/posts",{id})
  return response;
}