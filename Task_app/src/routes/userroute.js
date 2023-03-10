const express=require("express");
let  UserModel=require("../models/user.js");
const auth=require("../middleware/auth.js");
const upload=require("../middleware/fileupload.js");
const sharp=require("sharp");
const router=express.Router();



// for get
router.get("/user/me",auth,async(req,res)=>{
let myuser=req.user
  res.send(myuser);  
  })



  //for getting all user
  router.get("/users",async(req,res)=>{

    try {
    let allUser=await UserModel.find({})
    res.send(allUser) 
    } catch (error) {
      res.send(error)
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





//for logout user
  router.post("/user/logout",auth,async(req,res)=>{
  //  res.send(req.user);
  try {
    req.user.tokens = req.user.tokens.filter((token)=>{
      return token.token != req.token
   })
  await req.user.save();
  res.send("logout to your device");
    
  } catch (error) {
    res.send(error)
  }
 
  })  


  //for logout all user
  router.post("/user/logoutall",auth,async(req,res)=>{
    try {
      req.user.tokens=[];
      await req.user.save();
      res.send("logout form all devices")
    } catch (error) {
      res.send(error)
    }
  })


    

 //updating individual user my id
router.patch("/user/me",auth,async(req,res)=>{

    let updates=Object.keys(req.body);
    let validateUpdates=["name","email","age","password"];
    let vaidationupdate=updates.every((update)=> validateUpdates.includes(update) )

    if(!vaidationupdate){
      return res.send(404).send("invalid key value pair")
    }
    try {
      // let user=await UserModel.findById(req.params.id);
      let myuser=req.user;
      updates.forEach((userupdate)=>{
      myuser[userupdate]=req.body[userupdate]
      })
      await myuser.save();
      // if(!user){
      //   return res.status(404).send("not found any user")
      // }
      res.send(myuser)
    } catch (error) {
      res.send(error)
    }
  })


  

 //multer challenge one
 router.post("/user/profile/upload",auth,upload.single("avatar"),async(req,res)=>{
  const buffer=await sharp(req.file.buffer).resize({width:250,height:250}).png().toBuffer();
    req.user.avatar=buffer;
    await req.user.save();
  res.send("user avatar upload successfully")
 },(error,req,res,next)=>{
  res.status(400).send({error:error.message})
 })


 //deleting userprofile 
 router.delete("/user/profile/delete",auth,async(req,res)=>{
  try {
    req.user.avatar=undefined,
    await req.user.save();
    res.send("profile remove successfully")
    
  } catch (error) {
    res.send(error)
  }
 })


 //getting profile of user
 router.get("/users/:id/profile",async(req,res)=>{

  try {
    

    const User=await UserModel.findById(req.params.id);
    if(!User | !User.avatar){
    throw new Error();
    }
    res.set("Content-Type","image/png");
    res.send(User.avatar)

  } catch (error) {
    res.status(404).send()
  }
  
 })




  //for deleting user
router.delete("/user/me",auth,async(req,res)=>{
    try {
      req.user.remove();
      res.send(req.user)
      
    } catch (error) {
      res.send({error:"something went wrong cant remove"})
    }
  })
  

  module.exports=router
     