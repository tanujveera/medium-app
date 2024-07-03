import axiosInstance from "./axiosInstance"

export const emailAuthSignIn = async (username, password) => {
    const response = await axiosInstance.post("/user/signin",{username,password})
    return response;
}

export const emailAuthSignUp = async(firstName,lastName, username, password) => {
  const response = await axiosInstance.post("/user/signup",{ username,password,firstName,lastName})
  return response;
}

export const logout = async ()=>{
  const response = await axiosInstance.post("/user/logout")
  return response;
}