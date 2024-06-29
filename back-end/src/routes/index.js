import express from "express"
import { aboutCards, aboutData, landingFeatures } from "../data/constants.js";

export const router = express.Router();

router.get("/posts",(req,res)=>{
  res.json({msg:"Hello"})
})
