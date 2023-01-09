const auth=async(req,res,next)=>{
   res.send("this is auth level middleware")
}

module.exports=auth;