const express=require("express");
let  UserModel=require("../models/user.js");
const router=express.Router();



// for get
router.get("/user",async(req,res)=>{
    try {
       let alluser=await UserModel.find({});
       res.send(alluser)
    } catch (error) {
      res.send(error)
    }   
  })




 //for post
router.post("/user",async(req,res)=>{
    const Users=new UserModel(req.body);
    try {
      await Users.save()  
      res.send(Users);
    } catch (error) {
       res.status(400).send(error) 
    }
    })
    
    


    

 //updating individual user my id
router.patch("/user/:id",async(req,res)=>{
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




  //for deleting user
router.delete("/user/:id",async(req,res)=>{
    try {
      let deleteUser=await UserModel.findById(req.params.id);
      if(!deleteUser){
        return res.status(404).send("dont found any user")
      }
      res.send(deleteUser)
      
    } catch (error) {
      res.send(error)
    }
  })

  module.exports=router
     