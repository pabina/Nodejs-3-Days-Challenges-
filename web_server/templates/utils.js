const request =require("request")



const ForeCaste=(address,callback)=>{
    // const url="https://api.weatherapi.com/v1/current.json?key=13e99e5cd4424c5b8c374814230201&q=nepal"
const url="http://api.weatherstack.com/current?access_key=241c8b4d4379b743dcc0e25ab5b4888b&query=27.988,84.999"

    
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("unable to connection to location services",undefined)
        }
        else if(response.body.current===""){
            callback("Unalble to find location try another search",undefined)
        }
        else{
            let data=response.body.current;
            let myaddress=address;
            callback(undefined,{data,myaddress})
        }
    })
    
    }





// const ForeCaste=(req,res)=>{

//     if(!req.query.address){
//                 return res.render("weather",{
//                    title:"you must have provide the address" 
//                 })
//             }
        
//        else{ console.log(req.query);
//             let address=req.query.address;
//             res.render("weather",{
//                 title:"this is weather page",
//                 logitute:300,
//                 latitute:400,
//                 address:address,
//                 footer:"Weather footer"
//             })
//         }  

// }








// const ForeCaste=(req,res)=>{
    // const url="https://api.weatherapi.com/v1/current.json?key=13e99e5cd4424c5b8c374814230201&q=nepal"
// const url="http://api.weatherstack.com/current?access_key=241c8b4d4379b743dcc0e25ab5b4888b&query=27.988,84.999"
// const url="http://api.weatherstack.com/current?access_key=241c8b4d4379b743dcc0e25ab5b4888b"


// request({url:url,json:true},(error,response)=>{
//     console.log(response.body.current)
// })




    
    // request({url:url,json:true},(error,response)=>{
    //     if(error){
    //         res.render("weather",{
    //             title:"unable to connection to location services"
    //         })
        
    //     }
    //     else if(response.body.current===""){

    //         res.render("weather",{
    //             title:"Unalble to find location try another search"
    //         })
    //     }
    //     else{
    //         const data=response.body.current;
    //         res.render("weather",{
    //                            title:"this is weather page",
    //                             currenttemp:data.temperature,
    //                             feelslike:data.feelslike,
    //                             footer:"Weather footer"  
    //         })
    //     }
    // })
    
    // }












 module.exports=ForeCaste;