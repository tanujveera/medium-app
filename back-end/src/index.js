import express from "express";
import cors from "cors";
import { router } from "./routes/index.js";
import cookieParser from "cookie-parser"

const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(cookieParser());
const PORT = 5000;

app.use("/app/v1",router);


app.listen(PORT,()=>{
  console.log("Server started at http://localhost:"+PORT)
})