const express=require("express");
let taskroute=require("./routes/taskroute.js")

require("./db.js");

const app=express();
app.use(express.json())
app.use(taskroute);










app.listen("8001",()=>{
    console.log("server is working")
})