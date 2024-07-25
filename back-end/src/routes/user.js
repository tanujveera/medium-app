import express from "express";
import z from "zod"
import { createUser, deleteAllUsers, deleteUser, getAllUsers, getUser, updateUser } from "../schema/schema.js";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../data/config.js";
import { authMiddleware } from "../authMiddleware.js";
import bcrypt from "bcrypt";
import { HTTP } from "../data/constants.js";

export const userRouter = express.Router();

// Sign up 
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
    res.status(HTTP.LENGTH_REQUIRED).json({
      msg:"Please check the input fields"
    })
  }
  const existingUser = await getUser(req.body.username);
  if(existingUser){
    return res.status(HTTP.LENGTH_REQUIRED).json({
      msg:"Email already taken/ Input incorrect"
    })
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const userCreate = await createUser(username,hashedPassword,firstName,lastName);
  const uName = userCreate.username;
  const token = jwt.sign(uName,JWT_SECRET)
  res.cookie('token',token,{ httpOnly: true })
  res.status(HTTP.OK).json({
    msg:"User created successfully",
  })
});

//Sign in
const signinBody = z.object({
  username: z.string().email(),
  password: z.string(),
});

userRouter.post("/signin", async (req,res)=>{
  const {success} = signinBody.safeParse(req.body);
  const {username, password} = req.body;
  if(!success){
    res.status(HTTP.LENGTH_REQUIRED).json({
      msg:"Incorrect inputs"
    })
  }
  const user = await getUser(req.body.username);
  // console.log(user);
  const isPasswordValid = await bcrypt.compare(password, user.password)
  if(!isPasswordValid){
    return res.status(401).json({msg:"Invalid Credentials"})
  }
  if(user){
    const token = jwt.sign(username,JWT_SECRET);
    res.cookie('token',token,{ httpOnly: true })
    res.status(HTTP.OK).json({
      msg:"Login Successful",
    })
    return;
  }
  res.status(HTTP.LENGTH_REQUIRED).json({
    msg:"Error while logging in"
  })
})

// Update body
const updateBody = z.object({
  password:z.string().optional(),
  firstName:z.string().optional(),
  lastName: z.string().optional()
})

userRouter.put("/update",authMiddleware, async (req,res)=>{
  const {success} = updateBody.safeParse(req.body);
  // const {username} = req.body;
  if(!success){
    res.status(HTTP.LENGTH_REQUIRED).json({
      msg:"Error while updating information"
    })
  }
  try{
    const user = await updateUser(req.userId,req.body);
    if(user){
      res.status(HTTP.OK).json({
        msg:"Updated successfully"
      });
    }
  } catch(e){
    res.status(HTTP.INTERNAL_SERVER_ERROR).json({error:"Error in updating"})
  }
})

//Get all users
userRouter.get("/allusers",authMiddleware,(async(req,res)=>{
  const allusers = await getAllUsers();
  res.status(HTTP.OK).json(allusers);
}))

// Delete user
const deleteZUser = z.object({
  username:z.string().email()
});

userRouter.delete("/delete",authMiddleware, async (req,res)=>{
  const {success} = deleteZUser.safeParse(req.body);
  if(!success){
    res.status(HTTP.LENGTH_REQUIRED).json({
      msg:"User not found to delete"
    })
  }
  const user = await getUser(req.body.username);
  if(user){
    const deletedUser =  deleteUser(req.body.username);
    res.status(HTTP.OK).json({
      msg:"User deleted",
    })
  } else{
    res.status(HTTP.NOT_FOUND).json({
      msg:"User not deleted"
    })
  }
})

// Delete all users
userRouter.delete("/deleteAll",authMiddleware, async (req,res)=>{
  const deletedUsers =  await deleteAllUsers();
  if(deletedUsers){
    res.status(HTTP.OK).json({
      msg:"All users are deleted"
    })
  }
  if(!deletedUsers){
    res.status(HTTP.NOT_FOUND).json({
      msg:"Couldn't delete all users"
    })
  }
})

// User logout
userRouter.post("/logout",(req,res)=>{
  res.clearCookie('token',{httpOnly:true})
  res.status(200).json({msg:"Logged out successfully"})
})

userRouter.get('/auth-status', authMiddleware, (req, res) => {
  res.status(200).json({ isAuthenticated:true ,user: req.userId });
});