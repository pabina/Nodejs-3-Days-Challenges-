const request=require("request");

const url="https://api.weatherapi.com/v1/current.json?key=13e99e5cd4424c5b8c374814230201&q=nepal"



//challenge one
request({url:url,json:true},(error,response)=>{
    const data=response.body.current;
    console.log(`It is currently ${data.temp_c} degrees out.And feels like ${data.feelslike_c} degrees `)
})



