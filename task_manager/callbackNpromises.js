//callback example
//passing function as an argument is called callback function
const mycallbackFun=(callback)=>{
    setTimeout(()=>{
    callback(undefined,"this is success case")
    // callback("this is error case",undefined)

   
    },2000)
}
mycallbackFun((error,result)=>{
if(error){
 return   console.log("Error: " +error)
}
console.log("success :" +result)
})


//promises example
const promisesFunction=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve("promise success case")
    // reject("this is reject case")
    },2000)
})


promisesFunction.then((result)=>{
console.log(result)
}).catch((error)=>{
console.log(error)
})