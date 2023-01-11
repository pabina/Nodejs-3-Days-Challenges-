const multer=require("multer")

const upload=multer({
    
    limits:{
        fileSize:1000000
    },
   fileFilter(req,file,cb){
    if( !file.originalname.match(/\.(png|jpeg|jpg)$/)){
      return cb(new Error("you are only able to import png,jpg and jpeg file"))
    }
    cb(undefined,true)
   }
})






module.exports=upload;