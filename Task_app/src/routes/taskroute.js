const express=require('express');
let TASKMODEL=require("../models/mytask.js");
const auth=require("../middleware/auth.js");


const router=express.Router();



//for create task
router.post("/task",auth,async(req,res)=>{
    const task=new TASKMODEL({...req.body,owner:req.user._id})
    try {
         await task.save();
         res.send(task);
    } catch (error) {
       res.send(error) 
    }
    
})


//for getting tasks of related user
// router.get("/task",auth,async(req,res)=>{
//     try {
//         const alltask= await TASKMODEL.find({owner:req.user._id})
//         if(!alltask){
//           return  res.status(400).send("cant find any task")
//         }
//         res.send(alltask)
        
//     } catch (error) {
//        res.send(error) 
//     }

// })


//getting tasks of related user from populate

router.get("/task",auth,async(req,res)=>{
    try {
        let user=req.user;
        await user.populate("tasks");
       res.send(user.tasks);
             
    } catch (error) {
       res.send(error) 
    }

})









//for reading single item
//fetching specafic task for authenticted one user
router.get("/task/:id",auth,async(req,res)=>{
    const _id=req.params.id;

    try {
    let taskis=await TASKMODEL.findOne({_id,"owner":req.user._id}) 
    if(!taskis){
        return res.status(404).send("not found any task") 
    }
    res.status(200).send(taskis)  
    } catch (error) {
        res.status(500).send(error)   
    }

})









//for update by task id by valid user
router.patch("/task/:id",auth,async(req,res)=>{
try {
 let updates=Object.keys(req.body);
 let validateskeys=["taskname","description","completed"];
 let updatevalidation=updates.every((update)=>{
    return validateskeys.includes(update)
 })

 if(!updatevalidation){
    return res.send("invalid key value");
 }


let updatetask=await TASKMODEL.findOne({_id:req.params.id,owner:req.user._id});
if(!updatetask){
    return res.send("cant find any task")
}
updates.forEach((data)=>{
updatetask[data]=req.body[data]
})
 await updatetask.save();
res.send(updatetask)
    
} catch (error) {
  res.send(error)  
}
 


})




// for delete
router.delete("/task/:id",auth,async(req,res)=>{
    try {
        let removetask=await TASKMODEL.findOneAndDelete({_id:req.params.id,owner:req.user._id});
        if(!removetask){
          return  res.status(404).send("unable to remove")
        }
        
        await removetask.remove()
        res.send("remove successfully")
    } catch (error) {
       res.send(error) 
    }
})

//delete the all tasks of user who delete themself



module.exports=router;