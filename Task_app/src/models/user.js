const mongoose=require("mongoose");
const validator=require("validator")



const userSchema=mongoose.Schema({

  name:{
    type:String
  },


  email:{
    type:String,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Email crediantial doesnot match")
      }
    }
  },


  password:{
   type:String,
   require:true,

  validate(value){
    if(((value.length)<6) || (value.toLowerCase().includes("password"))){
        throw new Error("password crediantial doesnot match")
    }}
  }
  ,
  age:{
 type:Number
  }

})

userSchema.pre("save",function(next){
  console.log("run before save");
  next();
})



const UserModel=mongoose.model("user",userSchema);




module.exports=UserModel