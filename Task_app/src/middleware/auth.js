const jwt=require("jsonwebtoken");
const UserModel=require("../models/user.js");



const auth=async(req,res,next)=>{


    try {
        const token=req.header("Authorization").replace("Bearer ","");
        const decode= jwt.verify(token, "mysecretekey");
        console.log(decode);
        const validUser= await UserModel.findOne({_id:decode._id,"tokens.token":token})
        if(!validUser){
        throw new Error();
        }
       req.user=validUser;
        next();  
    } catch (error) {
      res.send({"error":"you are not authenticated"})  
    }
  
}

module.exports=auth;