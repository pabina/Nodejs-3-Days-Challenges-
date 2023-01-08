const express=require("express");
const { getMaxListeners } = require("./models/mytask.js");
const UserModel=require("./models/mytask.js");
require("./db.js");



const app=express();
app.use(express.json());



// for get

app.get("/user",(req,res)=>{
    res.send("this is user");
})


//for post
app.post("/user",async(req,res)=>{
const Users=new UserModel(req.body);
try {
  await Users.save()  
  res.send(Users);
} catch (error) {
   res.status(400).send(error) 
}

// Users.save().then(()=>{
// res.send(Users)
// }).catch((error)=>{
// res.send(error)
// })
})






//challenge for promise chaining
// app.patch("/user",(req,res)=>{
//     UserModel.findByIdAndUpdate("63b7dc96bd7bbf29bc19ed9e",{age:2}).then((result)=>{
//        res.send(result);
//     }).catch((eror)=>{
//      res.send(eror);
//     })
// })




//updating individual user my id
app.patch("/user/:id",async(req,res)=>{
  let updates=Object.keys(req.body);
  let validateUpdates=["name","email","age"];
  let vaidationupdate=updates.every((update)=> validateUpdates.includes(update) )
  console.log(vaidationupdate)
  console.log(updates);
  
  if(!vaidationupdate){
    return res.send(404).send("invalid key value pair")
  }
  try {
    let user= await UserModel.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    if(!user){
      return res.status(404).send("not found any user")
    }
    res.send(user)
  } catch (error) {
    res.send(error)
  }
})





app.listen(8002,()=>{
    console.log("server is working")
})