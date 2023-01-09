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
    

  //for registration of user
  router.post("/user/register",async(req,res)=>{
try {
  const registeruser= await UserModel.findOne({email:req.body.email,name:req.body.name})
//  res.send(!registeruser);
  if(!registeruser){
    const newUser=new UserModel(req.body);
    const token=await newUser.generateAuthToken();
    // await newUser.save();
    return res.status(200).send({newUser,token})
  }
  else{
    res.status(400).send("user already exist")
  }
 
  
} catch (error) {
  res.send(error)
}
  })

  

  

  //for login to user
router.post("/user/login",async(req,res)=>{
  try {
    const myuser=await UserModel.findByCredential(req.body.email,req.body.password);
    const token=await myuser.generateAuthToken();
    // console.log(token)
    res.send({myuser,token})
  } catch (e) {
    res.status(404).send("dont")
  }
})  
    


    

 //updating individual user my id
router.patch("/user/:id",async(req,res)=>{
    let updates=Object.keys(req.body);
    let validateUpdates=["name","email","age","password"];
    let vaidationupdate=updates.every((update)=> validateUpdates.includes(update) )

    
    
    if(!vaidationupdate){
      return res.send(404).send("invalid key value pair")
    }
    try {
      let user=await UserModel.findById(req.params.id);
      updates.forEach((userupdate)=>{
      user[userupdate]=req.body[userupdate]
      })
      await user.save();
      // let user= await UserModel.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
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
     