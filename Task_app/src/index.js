const express=require("express");
const TASKMODEL=require("./models/mytask.js");

require("./db.js");

const app=express();
app.use(express.json())


app.get("/mytask",(req,res)=>{
    res.send("you are welcome");
})

app.post("/mytask",(req,res)=>{
    const MytaskData=new TASKMODEL(req.body)
    MytaskData.save().then(()=>{
    console.log(MytaskData)
    res.status(201).send(MytaskData)
    }).catch((error)=>{
   res.status(400).send(error)
    })
//    res.send(req.body)
})








app.listen("8001",()=>{
    console.log("server is working")
})