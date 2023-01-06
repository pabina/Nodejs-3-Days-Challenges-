console.log("this is from client")

fetch("http://localhost:4000/weather?address=dharan").then((response)=>{
response.json().then((mydata)=>{
if(mydata.error){
    console.log(error)
}
else{
    console.log(mydata.temperature)
    console.log(mydata.feelslike)
}
})

  })
