//http request without library like request
 const http=require("http");

 url="http://api.weatherstack.com/current?access_key=241c8b4d4379b743dcc0e25ab5b4888b&query=27.988,84.999"





const request=http.request(url,(response)=>{
let data='';
 response.on("data",(chunk)=>{
   data=data+chunk.toString();

 })
 response.on("end",()=>{
const body=JSON.parse(data)
console.log(body)
 })

 })
 request.on("error",(error)=>{
console.log("error is:" + error)
 })

 request.end();