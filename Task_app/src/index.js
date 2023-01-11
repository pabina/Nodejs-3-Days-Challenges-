const express=require("express");
const taskroute=require("./routes/taskroute.js")
const userroute=require("./routes/userroute.js")
const jwt=require("jsonwebtoken");



require("./db.js");

const app=express();

const multer=require("multer")



app.use(express.json())
app.use(taskroute);
app.use(userroute);


const upload=multer({
    dest:"images"
})

app.post("/upload",upload.single("upload"),async(req,res)=>{
res.send("upload successfully");
})


 


// app.get("/alltask",async(req,res)=>{
// const alltask=await TASKMODEL.find({}, "",{limit:2,sort:{"taskname":-1}})
// res.send(alltask);
// })










    


app.listen("8001",()=>{
    console.log("server is working")
})




