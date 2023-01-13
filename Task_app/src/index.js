const express=require("express");
const taskroute=require("./routes/taskroute.js")
const userroute=require("./routes/userroute.js");
const jwt=require("jsonwebtoken");
const dotenv=require("dotenv");







require("./db.js");

const app=express();


dotenv.config();

app.use(express.json())
app.use(taskroute);
app.use(userroute);



 










   


app.listen(process.env.PORT,()=>{
    console.log("server is working")
})




