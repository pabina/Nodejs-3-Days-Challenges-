const path=require("path")
const express=require("express");
const hbs=require("hbs");

const app=express();
// console.log(__dirname)
// console.log(__filename)
// console.log(path.join(__filename,"../public"))


const pathName=path.join(__filename,"../public");
// const AboutPath=path.join(__filename,"..public")
const viewsPath=path.join(__filename,"../templates/views")
const partialPath=path.join(__filename,"../templates/partials")

app.use(express.static(pathName))



app.set('view engine', 'hbs');
app.set("views",viewsPath);
hbs.registerPartials(partialPath);




app.get("",(req,res)=>{
    res.render("index",{
        title:"About me",
        name:"pabina Rimal",
        education:"Bachelor",
        footer:"home footer"
    })
})

app.get("/help",(req,res)=>{
    res.render("help",{
        title:"Help me",
        work:"this is help page",
        footer:"help footer"
    })
})


app.get("/weather",(req,res)=>{
    res.render("weather",{
        title:"this is weather page",
        logitute:300,
        latitute:400,
        footer:"Weather footer"
    })
})

app.get("/help/*",(req,res)=>{
    res.render("error",{
        title:404,
        message:"404 error.Help article not found.",
        footer:" Help page not found"
    })
})

app.get("*", (req,res)=>{
    res.render("error",{
        title:404,
        message:"404 page not found" ,
        footer:"page not found"
    })
})


app.listen(4000,()=>{
    console.log("hello express");
})