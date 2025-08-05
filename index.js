import express from "express";
const app=express();


try{
    app.get("/app",(req,res)=>{
    console.log("hello:");
    res.json({
        msg:"ok"
    })
})

app.listen(8000,()=>{
    console.log("server is listening on the port 3000");
})
}
catch(err){
    console.log(err);
}