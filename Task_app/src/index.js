const express=require("express");
const TASKMODEL=require("./models/mytask.js");

require("./db.js");

const app=express();
app.use(express.json())





//for create
app.post("/mytask",(req,res)=>{
    const MytaskData=new TASKMODEL(req.body)
    MytaskData.save().then(()=>{
    console.log(MytaskData)
    res.status(201).send(MytaskData)
    }).catch((error)=>{
   res.status(400).send(error)
    })
//    res.send(req.body)
})


//for reading
app.get("/mytask",(req,res)=>{
     TASKMODEL.find().then((result)=>{
res.status(200).send(result);
    }).catch((error)=>{
        res.status(500).send(error)
    })
    
})

//for reading single item
app.get("/mytask/:id",(req,res)=>{
    const _id=req.params.id;
    
   TASKMODEL.findById(_id).then((result)=>{
    if(!result){
       return res.status(404).send()
    }
    res.status(200).send(result)
   }).catch((error)=>{
    res.status(500).send(error)
   })
})








app.listen("8001",()=>{
    console.log("server is working")
})