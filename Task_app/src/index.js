const express=require("express");
const taskroute=require("./routes/taskroute.js")
const userroute=require("./routes/userroute.js")
const jwt=require("jsonwebtoken");
// const auth=require("./middleware/auth.js")

require("./db.js");

const app=express();



app.use(express.json())
app.use(taskroute);
app.use(userroute);


 



app.listen("8001",()=>{
    console.log("server is working")
})


// const me={
//     name:"pabina",
//     location:"ktm"
// }

// me.toJSON=function(){
//     console.log(this)
// // return this
//    return {}
// }

// console.log(me)
// console.log(JSON.stringify(me));

