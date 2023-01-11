const multer=require("multer")

const upload=multer({
    dest:"avatars",
    limits:{
        fileSize:1000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.endsWith(".pdf")){
           return cb(new Error("please upload PDF file"))
        }
        cb(undefined,true)
    }
})




module.exports=upload;