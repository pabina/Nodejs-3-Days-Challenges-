const path=require("path")
const express=require("express");

const app=express();
// console.log(__dirname)
// console.log(__filename)
// console.log(path.join(__filename,"../public"))


const pathName=path.join(__filename,"../public");
// const AboutPath=path.join(__filename,"..public")

app.use(express.static(pathName))

app.get("/home",(req,res)=>{
    res.send("<h1>you are inside home page</h1>")
})


app.get("/weather",(req,res)=>{
    res.send([{
        logitute:300,
        latitute:400
    }])
})


app.listen(4000,()=>{
    console.log("hello express");
})