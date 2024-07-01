import express from "express";
import z from "zod"
import { createUser, getUser, updateUser } from "../schema/schema";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../data/config";
import { authMiddleware } from "../authMiddleware";

export const userRouter = express.Router();



const HTTP = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  LENGTH_REQUIRED: 411,
  FORBIDDEN: 403,
};

const signUpBody = z.object({
  username: z.string().email(),
  password: z.string(),
  firstName: z.string(),
  lastName: z.string()
})

userRouter.post("/signup", async (req,res) => {
  const {success} = signUpBody.safeParse(req.body);
  const {username, password, firstName, lastName} = req.body;
  if(!success){
    res.json({
      msg:"Please check the input fields"
    })
  }
  const existingUser = await getUser(req.body.username);
  if(existingUser){
    return res.json({
      msg:"Email already taken/ Input incorrect"
    })
  }
  const userCreate = await createUser(username,password,firstName,lastName);
  const uName = userCreate.username;
  const token = jwt.sign(uName,JWT_SECRET)
  res.json({
    msg:"User created successfully",
    token:token
  })
});

const signinBody = z.object({
  username: z.string().email(),
  password: z.string(),
});

userRouter.post("/signin", async (req,res)=>{
  const {success} = signinBody.safeParse(req.body);
  const {username} = req.body;
  if(!success){
    res.status(401).json({
      msg:"Incorrect inputs"
    })
  }
  const user = await getUser(req.body.username);
  if(user){
    const token = jwt.sign(username,JWT_SECRET);
    res.json({
      token.token
    })
    return;
  }
  res.json({
    msg:"Error while logging in"
  })
})

const updateBody = z.obect({
  password:z.string().optional(),
  firstName:z.string().optional()
  lastName: z.string().optional()
})

userRouter.put("/update",authMiddleware, async (req,res)=>{
  const {success} = updateBody.safeParse(req.body);
  // const {username} = req.body;
  if(!success){
    res.status(401).json({
      msg:"Error while updating information"
    })
  }
  try{
    const user = await updateUser(username,updated)
  }
})