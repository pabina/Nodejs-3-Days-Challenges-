const request=require("request");
const ForeCaste=require("./utils")

// const url="https://api.weatherapi.com/v1/current.json?key=13e99e5cd4424c5b8c374814230201&q=nepal"
// const url="https://api.weatherapi.com/v1/current.json?key=13e99e5cd4424c5b8c374814230201"






// ForeCaste((errorData,successData)=>{
// console.log("Error",errorData),
// console.log("Success",successData)
// })





//challenge two of callback function

// const Add=(x,y,callback)=>{
    
//     setTimeout(()=>{
//     let sum=x+y;
//     callback(sum);
//     },2000)
   
// }

// Add(3,4,(result)=>{
// console.log(result);
// })






//another http request
myurl="http://api.weatherstack.com/current?access_key=241c8b4d4379b743dcc0e25ab5b4888b&query=27.988,84.999"

request({url:myurl,json:true},(error,response)=>{
const data=response.body
console.log(data.location.name)
console.log(data.location.country)

})


