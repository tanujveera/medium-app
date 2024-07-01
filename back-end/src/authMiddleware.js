import jwt from "jsonwebtoken"
import { JWT_SECRET } from "./data/config.js";

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({});
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if(decoded){
          req.userId = decoded;
          next();
        }
        else{
          console.log("Error else");
          return res.status(403).json({});
        }

    } catch (err) {
      console.log("Error catch");
        return res.status(403).json({});
    }
};