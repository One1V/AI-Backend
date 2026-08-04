const express=require("express");
const app=express();

app.use(express.static("public"));
// Serve all static files from the public folder
// "Whenever someone requests a file, first check inside the public folder. 
// If it exists, send it automatically."


app.listen(3000,()=>{
    console.log("Server is running...");
})