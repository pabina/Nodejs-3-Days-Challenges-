const express=require("express");
const taskroute=require("./routes/taskroute.js")
const userroute=require("./routes/userroute.js")
const jwt=require("jsonwebtoken");

require("./db.js");

const app=express();
app.use(express.json())
app.use(taskroute);
app.use(userroute);


 




//generating authentication token
// const authenticationFun=()=>{
//   const token=  jwt.sign({_id:"hellopabina123456"}, "mysecretekey",{expiresIn:"1 s"});
//   console.log(token)
//   const data=jwt.verify(token,"mysecretekey")
//   console.log(data)


// }

// authenticationFun();








app.listen("8001",()=>{
    console.log("server is working")
})