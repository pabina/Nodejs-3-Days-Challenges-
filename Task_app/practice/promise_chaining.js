const Task=require("../src/models/mytask.js");
require("../src/db.js");


// Task.findByIdAndRemove("63b9342270f69c52d4a2d79e").then((result1)=>{
// console.log(result1)
// return Task.countDocuments({completed:true})
// }).then((result2)=>{
// console.log(result2)
// }).catch((error)=>{
//     console.log(error)
// })

//modifying promise chaining to async await

const RemoveAndCount=async(id)=>{
    let removeData= await Task.findByIdAndRemove(id);
    let CountsameMatch=await Task.countDocuments({completed:true})
    return {removeData,CountsameMatch};
}

RemoveAndCount("63b930aeb9173692f32f4621").then(({removeData,CountsameMatch})=>{
console.log(removeData)
console.log(CountsameMatch)

}).catch((e)=>{
console.log(e)
})