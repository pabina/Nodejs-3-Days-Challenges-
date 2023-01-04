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
        name:"pabina Rimal",
        education:"Bachelor"
    })
})


app.get("/weather",(req,res)=>{
    res.render("weather",{
        logitute:300,
        latitute:400
    })
})



app.listen(4000,()=>{
    console.log("hello express");
})