import express from "express";
import dotenv from "dotenv/config";
import {connectDB} from "./lib/db.js";

const app=express();
const PORT=process.env.PORT || 3001;
app.get("/",(req,res)=>{
     res.send("Hello World");
});

    app.listen(PORT,()=>{
console.log(`Server is running on port ${PORT}`)
connectDB();
})