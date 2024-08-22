import express from "express"
import { aboutCards, aboutData, landingFeatures } from "../data/constants.js";
import { contentRouter } from "./content.js";
import { userRouter } from "./user.js";
import { postsRouter } from "./posts.js";
import { openAIRouter } from "./openAIRouter.js";

export const router = express.Router();

router.use("/content",contentRouter);
router.use("/user",userRouter);
router.use("/openai",openAIRouter);
router.use("/blog",postsRouter)
