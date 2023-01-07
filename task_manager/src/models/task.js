const mongoose=require("mongoose");
const validator=require("validator")


const TASK=mongoose.model("Task",{
    
  description:{
    type:String
  },

  completed:{
    type:Boolean
  }
   
})

module.exports=TASK;