import express from "express"
import { aboutCards, aboutData, landingFeatures } from "../data/constants.js";
import { contentRouter } from "./content.js";
import { userRouter } from "./user.js";

export const router = express.Router();

router.use("/content",contentRouter);
router.use("/user",userRouter);

router.use("/posts")
