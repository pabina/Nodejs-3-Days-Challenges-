const jwt=require("jsonwebtoken");
const UserModel=require("../models/user.js");




const auth=async(req,res,next)=>{


    
    try {
        const token=req.header("Authorization").replace("Bearer ","");
        const decode= jwt.verify(token, "mysecretekey");
        // console.log(decode);
        const validUser= await UserModel.findOne({_id:decode._id,"tokens.token":token})
        if(!validUser){
        throw new Error();
        }
       req.user=validUser;
       req.token=token;
        next();  
    } catch (error) {
      res.send({"error":"you are not authenticated"})  
    }
  
}

module.exports=auth;





// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2JiZDg3NzcwZTE1MzVkMTk2YTdlZjIiLCJpYXQiOjE2NzMyODk5MzF9.U4nc-H50pkJG8g9-JF1y_YaL8sciqyYyAafTPrja5iw


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2JiZDg3NzcwZTE1MzVkMTk2YTdlZjIiLCJpYXQiOjE2NzMyOTAwMzZ9.CTiR3eUGbeFHeckZcW2Jho6Y9qLs_aR...
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2JiZDg3NzcwZTE1MzVkMTk2YTdlZjIiLCJpYXQiOjE2NzMyOTAwMzZ9.CTiR3eUGbeFHeckZcW2Jho6Y9qLs_aRMA0QWHWGs4-E