const mongoose=require("mongoose");

const connectUrl="mongodb://localhost:27017/task_managerApp"
mongoose.set('strictQuery', false)
mongoose.connect(connectUrl,{useNewUrlParser:true}).then((result)=>{
    console.log("Connection successfull")
}).catch((error)=>{
console.log(error)
});





