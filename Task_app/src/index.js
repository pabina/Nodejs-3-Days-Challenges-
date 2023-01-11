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
const alltask=await TASKMODEL.find({}, "",{limit:2,sort:{"taskname":-1}})
res.send(alltask);
})










    


app.listen("8001",()=>{
    console.log("server is working")
})




