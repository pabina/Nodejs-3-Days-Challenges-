const express=require("express");
const taskroute=require("./routes/taskroute.js")
const userroute=require("./routes/userroute.js")
const jwt=require("jsonwebtoken");
const auth=require("./middleware/auth.js");
const TASKMODEL=require("./models/mytask.js");
const UserModel=require("./models/user.js");

require("./db.js");

const app=express();



app.use(express.json())
app.use(taskroute);
app.use(userroute);


 
// app.get("/task",auth,async(req,res)=>{
// const getalltask= await TASKMODEL.find({owner:req.user._id});
// console.log(getalltask[0].owner)
// res.send(getalltask);
// })

app.get("/alltask",async(req,res)=>{
const alltask=await TASKMODEL.find({});
res.send(alltask);
})


//from task you find user
//introduce to ref and populate mongoose schema
app.get("/onetask",async(req,res)=>{
    const onetask=await TASKMODEL.findById("63bd2c6ef12c15b3c5cb4105");
    // console.log(onetask.owner.toString())
    await onetask.populate("owner");
    console.log(onetask.owner);
    res.send(onetask);
})

//from user you have to find task




app.get("/task",auth,async(req,res)=>{
    const getalltask= await TASKMODEL.find({owner:req.user._id});
    console.log(getalltask[0].owner)
    await getalltask[0].populate("owner");
    res.send(getalltask);
    })
    


app.listen("8001",()=>{
    console.log("server is working")
})




