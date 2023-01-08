const express=require('express');
let TASKMODEL=require("../models/mytask.js")

const router=express.Router();


//for create
router.post("/mytask",async(req,res)=>{
    const MytaskData=new TASKMODEL(req.body)

try {
  await MytaskData.save();
  res.status(201).send(MytaskData)
} catch (error) {
    res.status(400).send(error)  
}
    

})


//for reading
router.get("/mytask",async(req,res)=>{
    try {
     let alltask= await TASKMODEL.find({});
        res.status(200).send(alltask);
    } catch (error) {
        res.status(500).send(error) 
    }
    
})



//for reading single item
router.get("/mytask/:id",async(req,res)=>{
    const _id=req.params.id;

    try {
    let taskis=await TASKMODEL.findById(_id) 
    if(!taskis){
        return res.status(404).send("not found any task") 
    }
    res.status(200).send(taskis)  
    } catch (error) {
        res.status(500).send(error)   
    }

})


//for update
router.patch("/mytask/:id",async(req,res)=>{

    let updates=Object.keys(req.body);
    let validateskeys=["taskname","description","completed"];
    let updatevalidation=updates.every((updatedata)=>validateskeys.includes(updatedata))
    if(!updatevalidation){
        return res.status(404).send("not matching key")
    }
    try {
        // let updatetask=await TASKMODEL.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
        let updatetask=await TASKMODEL.findById(req.params.id);
        updates.forEach((updatedata)=>{
            updatetask[updatedata]=req.body[updatedata]
        })
        await updatetask.save();
      if(!updatetask){
        res.status(404).send("not found any task")
      }
      res.send(updatetask)
      
    } catch (error) {
      res.send(error) 
    }
})


// for delete
router.delete("/mytask/:id",async(req,res)=>{
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



module.exports=router;