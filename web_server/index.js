const express=require("express");

const app=express();

//making routes

//making home routes
app.get("/home",(req,res)=>{
    res.send("you are inside home page")
})

//making about routes
app.get("/about",(req,res)=>{
    res.send("you are inside about page")
})

//creating express server
app.listen(4000,()=>{
    console.log("hello express");
})