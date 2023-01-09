const express=require("express");
const taskroute=require("./routes/taskroute.js")
const userroute=require("./routes/userroute.js")
const jwt=require("jsonwebtoken");

require("./db.js");

const app=express();

//express middleware
// app.use((req,res,next)=>{
//     console.log(req.method)
//     next();
//     })

app.use((req,res,next)=>{
    res.status(503).send("site is under maintainance please try back later")
})
    


app.use(express.json())
app.use(taskroute);
app.use(userroute);


 











app.listen("8001",()=>{
    console.log("server is working")
})