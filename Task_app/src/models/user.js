 const mongoose=require("mongoose");
const validator=require("validator");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken")



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
   unique:true,
   trim:true,

  validate(value){
    if(((value.length)<6) || (value.toLowerCase().includes("password"))){
        throw new Error("password crediantial doesnot match")
    }}
  }
  ,
  age:{
 type:Number
  },
 tokens:[{
  token:{
    type:String,
    required:true
  }
 }]

})

userSchema.methods.generateAuthToken = async function(){
  const user=this
  console.log(user)
  const token= jwt.sign({_id:user._id.toString()},"mysecretekey")
  user.tokens=user.tokens.concat({token})
  user.save();
  return token

}



userSchema.statics.findByCredential=async(email,password)=>{
  const newuser=await UserModel.findOne({email});
  if(!newuser){
    throw new Error("unable to login")
  }
  const isMatch=await bcrypt.compare(password,newuser.password);
  if(!isMatch){
    throw new Error ("unable to login")
  }

  return newuser;

}






userSchema.pre("save",async function(next){
  const user=this;

if(user.isModified("password")){
  user.password=await bcrypt.hash(user.password,8);
}
  next();
})





const UserModel=mongoose.model("user",userSchema);




module.exports=UserModel