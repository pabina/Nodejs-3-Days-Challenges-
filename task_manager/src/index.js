const express=require("express");
const UserModel=require("./models/mytask.js");
require("./db.js");



const app=express();
app.use(express.json());



// for get

app.get("/user",(req,res)=>{
    res.send("this is user");
})


//for post
app.post("/user",(req,res)=>{
const Users=new UserModel(req.body);
Users.save().then(()=>{
res.send(Users)
}).catch((error)=>{
res.send(error)
})
})






//challenge for promise chaining
// app.patch("/user",(req,res)=>{
//     UserModel.findByIdAndUpdate("63b7dc96bd7bbf29bc19ed9e",{age:2}).then((result)=>{
//        res.send(result);
//     }).catch((eror)=>{
//      res.send(eror);
//     })
// })









app.listen(8002,()=>{
    console.log("server is working")
})