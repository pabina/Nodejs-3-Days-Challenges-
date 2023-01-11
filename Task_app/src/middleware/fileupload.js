const multer=require("multer")

const upload=multer({
    dest:"avatars",
    limits:{
        fileSize:1000000
    },
    fileFilter(req,file,cb){
        // if(!file.originalname.endsWith(".pdf"))
        if(!file.originalname.match(/\.(doc|docx)$/))
            {
           return cb(new Error("please upload wprd file"))
        }
        cb(undefined,true)
    }
})




module.exports=upload;