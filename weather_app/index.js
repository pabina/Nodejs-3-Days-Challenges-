const request=require("request");
const ForeCaste=require("./utils")

// const url="https://api.weatherapi.com/v1/current.json?key=13e99e5cd4424c5b8c374814230201&q=nepal"
// const url="https://api.weatherapi.com/v1/current.json?key=13e99e5cd4424c5b8c374814230201"




//challenge two
// request({url:url,json:true},(error,response)=>{
//     if(error){
// console.log("unable to connection to location services")
//      }
//      else if(response.body.current===""){
//  console.log("Unalble to find location try another search")
//      }
//     else{
//         const data=response.body.current;
//         console.log(`It is currently ${data.temp_c} degrees out.And feels like ${data.feelslike_c} degrees `)
//     }
    
// })





//challenge three of callback function

// const ForeCaste=(callback)=>{
    
// const url="https://api.weatherapi.com/v1/current.json?key=13e99e5cd4424c5b8c374814230201&q=nepal"

// request({url:url,json:true},(error,response)=>{
//     if(error){
//         callback("unable to connection to location services",undefined)
//     }
//     else if(response.body.current===""){
//         callback("Unalble to find location try another search",undefined)
//     }
//     else{
//         const data=response.body.current;
//         callback(undefined,`It is currently ${data.temp_c} degrees out.And feels like ${data.feelslike_c} degrees `)
//     }
// })

// }

ForeCaste((errorData,successData)=>{
console.log("Error",errorData),
console.log("Success",successData)
})





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





