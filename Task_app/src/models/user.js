const mongoose=require("mongoose")



const UserModel=mongoose.model("user",{
  name:{
    type:String
  },
  email:{
    type:String
  },
  password:{
   type:String
  },
  age:{
 type:Number
  }
});




module.exports=UserModel