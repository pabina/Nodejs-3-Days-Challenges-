const request=require("request");

const url="https://api.weatherapi.com/v1/current.json?key=13e99e5cd4424c5b8c374814230201&q=nepal"


request({url:url},(error,response)=>{
    const data=JSON.parse(response.body);
    console.log(data.location)
})