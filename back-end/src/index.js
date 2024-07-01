import express from "express";
import cors from "cors";
import { router } from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;

app.use("/app/v1",router);


app.listen(PORT,()=>{
  console.log("Server started at http://localhost:"+PORT)
})