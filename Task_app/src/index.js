const express=require("express");
const taskroute=require("./routes/taskroute.js")
const userroute=require("./routes/userroute.js")
const jwt=require("jsonwebtoken");



require("./db.js");

const app=express();

const multer=require("multer")



app.use(express.json())
app.use(taskroute);
app.use(userroute);


// const upload=multer({
//     dest:"images"
// })

// app.post("/upload",upload.single("upload"),async(req,res)=>{
// res.send("upload successfully");
// })


 


// app.get("/alltask",async(req,res)=>{
// const alltask=await TASKMODEL.find({}, "",{limit:2,sort:{"taskname":-1}})
// res.send(alltask);
// })






//for multer paractice
// const upload=multer({
//     dest:"avatars",
//     limits:{
//         fileSize:1000000
//     },
//    fileFilter(req,file,cb){
//     if( !file.originalname.match(/\.(png|jpeg|jpg)$/)){
//       return cb(new Error("you are only able to import png,jpg and jpeg file"))
//     }
//     cb(undefined,true)
//    }
// })


// app.post("/myfile/upload",upload.single("avatar"),async(req,res)=>{
//     res.send("user avatar upload successfully")
//    },(error,req,res,next)=>{
//     res.status(400).send({error:error.message})
//    })
  





    


app.listen("8001",()=>{
    console.log("server is working")
})




