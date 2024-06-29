import express from "express"
import { aboutCards, aboutData, landingFeatures } from "../data/constants.js";

export const contentRouter = express.Router();

contentRouter.get("/landing",(req,res)=>{
  res.json({data:{
    landingFeatures
  }})
})
contentRouter.get("/about",(req,res)=>{
  res.json({data:{
    aboutData, aboutCards
  }})
})


