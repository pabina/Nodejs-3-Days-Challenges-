const express=require("express");
const dotenv=require("dotenv");
require("./db");
const TASK=require("./models/task.js")

const app=express();

dotenv.config();


app.post("/task",(req,res)=>{

const taskdata=new TASK(req.body)
taskdata.save().then(()=>{
    res.send(taskdata)
}).catch((error)=>{
    res.send(error)
})

})







app.listen(process.env.PORT,()=>{
    console.log("server is working")
})