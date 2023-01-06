const mongoose=require("mongoose");
const validator=require("validator");

const connectUrl="mongodb://localhost:27017/task_managerApp"
mongoose.set('strictQuery', false)
mongoose.connect(connectUrl,{useNewUrlParser:true}).then((result)=>{
    console.log("Connection successfull")
}).catch((error)=>{
console.log(error)
});

const TASk=mongoose.model("Task",{
   
    description:{ 
    required:true,
     type:String,
     lowercase:true,
     trim:true,
    },
   
    completed:{
     type:Boolean,
     default:false,
    }
})

const taskcollection=new TASk({
    description:"this is description",
    // completed:true,
  
})

taskcollection.save().then(()=>{
console.log(taskcollection)
}).catch((error)=>{
console.log(error)
})