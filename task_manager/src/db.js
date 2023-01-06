const mongoose=require("mongoose");

const connectUrl="mongodb://localhost:27017/task_managerApp"
mongoose.set('strictQuery', false)
mongoose.connect(connectUrl,{useNewUrlParser:true}).then((result)=>{
    console.log("Connection successfull")
}).catch((error)=>{
console.log(error)
});

// const TASk=mongoose.model("Task",{
   
//  description:{
//   type:String
//     },
//     completed:{
//      type:Boolean
//     }
// })

// const taskcollection=new TASk({
//     description:"this is task one",
//     completed:true
// })

// taskcollection.save().then(()=>{
// console.log(taskcollection)
// }).catch((error)=>{
// console.log(error)
// })