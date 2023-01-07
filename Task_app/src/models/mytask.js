const mongoose=require("mongoose")


const TASKMODEL=mongoose.model("Task",{
    taskname:{
type:String,
required:true
    },
    description:{
        type:String,
        trim:true,
        lowercase:true
        
    },
    completed:{
        type:Boolean,
        default:false,
        required:true
    }
});

module.exports=TASKMODEL;