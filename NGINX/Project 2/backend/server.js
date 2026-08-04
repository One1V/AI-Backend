const express=require("express");
const app=express();

app.get("/api/message",(req,res)=>{
    res.json({
        message:"Ayush"
    });
})

app.listen(5000,()=>{
    console.log("Server is running...");
})