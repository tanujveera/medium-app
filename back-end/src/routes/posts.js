import express from "express";
import z from "zod";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../data/config.js";
import { authMiddleware } from "../authMiddleware.js";
import bcrypt from "bcrypt";

export const userRouter = express.Router();