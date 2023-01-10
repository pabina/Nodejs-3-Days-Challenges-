const mongoose=require("mongoose")

const TASKSchema=mongoose.Schema({

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

},{
    timestamps:true
})


// const TASKMODEL=mongoose.model("Task",{
//     taskname:{
//   type:String,
//     required:true
//     },
//     description:{
//         type:String,
//         trim:true,
//         lowercase:true,
//         required:true
        
//     },
//     completed:{
//         type:Boolean,
//         default:false,
//         required:true
//     },

//    owner:{
//     type:mongoose.Schema.Types.ObjectId,
//     require:true,
//     ref:"user"
//     }
// });

const TASKMODEL=mongoose.model("Task",TASKSchema);

module.exports=TASKMODEL;