import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../data/config.js";
import { authMiddleware } from "../authMiddleware.js";
import bcrypt from "bcrypt";
import { HTTP } from "../data/constants.js";
import z from "zod";
import openai from "../utils/openAI.js";

export const openAIRouter = express.Router();

openAIRouter.post("/", authMiddleware ,async (req, res) =>{
    const {gptQuery} = req.body;
    const gptResult = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
    })
    res.json({
        msg:"Fetched from GTP",
        data:gptResult.choices
    })
})