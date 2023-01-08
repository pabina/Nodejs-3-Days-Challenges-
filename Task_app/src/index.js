const express=require("express");
const TASKMODEL=require("./models/mytask.js");

require("./db.js");

const app=express();
app.use(express.json())


//using router
const router=express.Router();
router.get("/router",async(req,res)=>{
    res.send("this is the router path")
})
app.use(router);


//for create
app.post("/mytask",async(req,res)=>{
    const MytaskData=new TASKMODEL(req.body)

try {
  await MytaskData.save();
  res.status(201).send(MytaskData)
} catch (error) {
    res.status(400).send(error)  
}
    
//     MytaskData.save().then(()=>{
//     console.log(MytaskData)
//     res.status(201).send(MytaskData)
//     }).catch((error)=>{
//    res.status(400).send(error)
//     })
})


//for reading
app.get("/mytask",async(req,res)=>{
    try {
     let alltask= await TASKMODEL.find({});
        res.status(200).send(alltask);
    } catch (error) {
        res.status(500).send(error) 
    }
//      TASKMODEL.find({}).then((result)=>{
// res.status(200).send(result);
//     }).catch((error)=>{
//         res.status(500).send(error)
//     })
    
})



//for reading single item
app.get("/mytask/:id",async(req,res)=>{
    const _id=req.params.id;

    try {
    let taskis=  await TASKMODEL.findById(_id) 
    if(!taskis){
        return res.status(404).send("not found any task") 
    }
    res.status(200).send(taskis)  
    } catch (error) {
        res.status(500).send(error)   
    }

//    TASKMODEL.findById(_id).then((result)=>{
//     if(!result){
//        return res.status(404).send()
//     }
//     res.status(200).send(result)
//    }).catch((error)=>{
//     res.status(500).send(error)
//    })
})


//for update
app.patch("/mytask/:id",async(req,res)=>{
    let updates=Object.keys(req.body);
    let validateskeys=["taskname","description","completed"];
    let updatevalidation=updates.every((updatedata)=>validateskeys.includes(updatedata))
    if(!updatevalidation){
        return res.status(404).send("not matching key")
    }
    try {
        let updatetask=await TASKMODEL.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
      if(!updatetask){
        res.status(404).send("not found any task")
      }
      res.send(updatetask)
      
    } catch (error) {
      res.send(error) 
    }
})


// for delete
app.delete("/mytask/:id",async(req,res)=>{
    try {
        let task=await TASKMODEL.findByIdAndDelete(req.params.id);
        if(!task){
            res.status(404).send("task not found")
        }
        res.send(task)
    } catch (error) {
       res.send(error) 
    }
})










app.listen("8001",()=>{
    console.log("server is working")
})