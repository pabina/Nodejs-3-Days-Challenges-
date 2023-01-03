const request =require("request")



const ForeCaste=(callback)=>{
    const url="https://api.weatherapi.com/v1/current.json?key=13e99e5cd4424c5b8c374814230201&q=nepal"
    
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("unable to connection to location services",undefined)
        }
        else if(response.body.current===""){
            callback("Unalble to find location try another search",undefined)
        }
        else{
            const data=response.body.current;
            callback(undefined,`It is currently ${data.temp_c} degrees out.And feels like ${data.feelslike_c} degrees `)
        }
    })
    
    }

 module.exports=ForeCaste;