const express=require("express");
const taskroute=require("./routes/taskroute.js")
const userroute=require("./routes/userroute.js")
const bcrypt=require("bcryptjs")

require("./db.js");

const app=express();
app.use(express.json())
app.use(taskroute);
app.use(userroute);







// const hashFun=async()=>{
//     let password="pabina"
//     let hashpassword= await bcrypt.hash(password,8);
//     console.log(hashpassword)
//     let result= await bcrypt.compare(password,hashpassword);
//     console.log(result)
// console.log("this is for hashfun");
// }

// hashFun();





app.listen("8001",()=>{
    console.log("server is working")
})