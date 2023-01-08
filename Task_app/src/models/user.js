const mongoose=require("mongoose");
const validator=require("validator");
const bcrypt=require("bcryptjs")



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

userSchema.pre("save",async function(next){
  const user=this;

if(user.isModified("password")){
  user.password=await bcrypt.hash(user.password,8);
}
  next();
})



const UserModel=mongoose.model("user",userSchema);




module.exports=UserModel