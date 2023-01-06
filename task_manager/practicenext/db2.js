const mongoose=require("mongoose");
const validator=require("validator")


mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/practice_task_app").then((result)=>{
console.log("connect successfully")
}).catch((error)=>{
console.log("error in connection")
})


//creating model or schema
const Practice=mongoose.model("Collection1",{
    password:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(((value.length)<6) || (value.toLowerCase().includes("password"))){
                throw new Error("password crediantial doesnot match")
            }
            
        }

    }
})

//creating instance of model 
const PracticeData=new Practice({
    password:"Password"
})
PracticeData.save().then(()=>{
   console.log(PracticeData) 
}).catch((error)=>{
    console.log(error)
})

