const mongoose=require("mongoose")


const TASKMODEL=mongoose.model("Task",{
    taskname:{
  type:String,
    required:true
    },
    description:{
        type:String,
        trim:true,
        lowercase:true,
        required:true
        
    },
    completed:{
        type:Boolean,
        default:false,
        required:true
    },

   owner:{
    type:mongoose.Schema.Types.ObjectId,
    require:true,
    ref:"user"
    }
});

module.exports=TASKMODEL;