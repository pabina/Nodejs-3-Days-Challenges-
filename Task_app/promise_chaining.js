const Task=require("./src/models/mytask.js");
require("./src/db.js");


Task.findByIdAndRemove("63b9342270f69c52d4a2d79e").then((result1)=>{
console.log(result1)
return Task.countDocuments({completed:true})
}).then((result2)=>{
console.log(result2)
}).catch((error)=>{
    console.log(error)
})

//modifying promise chaining to async await