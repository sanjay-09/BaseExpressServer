import express from "express";

import dotenv from "dotenv";
import { create } from "./controller";

dotenv.config();
const app=express();


try{
    app.get("/app",(req,res)=>{
    console.log("hello:");
    res.json({
        msg:"ok"
    })
})

app.get("/app2",(req,res)=>{
    console.log("hello:");
    res.json({
        msg:"ok"
    })
})

app.get("/app3",create);

app.listen(process.env.PORT,()=>{
    console.log(`server is listening on the port ${process.env.PORT}`);
})
}
catch(err){
    console.log(err);
}