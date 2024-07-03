import jwt from "jsonwebtoken"
import { JWT_SECRET } from "./data/config.js";

export const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({msg:"No token provided"});
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if(decoded){
          console.log(decoded);
          req.userId = decoded;
          next();
        }
        else{
          console.log("Error else");
          return res.status(403).json({msg:"Failed to Authenticate token"});
        }

    } catch (err) {
      console.log("Error catch");
        return res.status(403).json({msg:"Failed to Authenticate token"});
    }
};