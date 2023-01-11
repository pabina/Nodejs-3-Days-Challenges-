const express=require("express");
const taskroute=require("./routes/taskroute.js")
const userroute=require("./routes/userroute.js")
const jwt=require("jsonwebtoken");



require("./db.js");

const app=express();




app.use(express.json())
app.use(taskroute);
app.use(userroute);



 

















    


app.listen("8001",()=>{
    console.log("server is working")
})




