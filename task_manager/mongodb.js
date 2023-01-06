const mongodb=require("mongodb");
const MongoClient=mongodb.MongoClient;


const connectUrl="mongodb://localhost:27017"
const databaseName="taskManager"


MongoClient.connect(connectUrl,{useNewUrlParser:true},(error,client)=>{
    if(error){
      return  console.log("Unable to Connect to Database");
    }
    console.log("Successfully Connect to Database");

    const db=client.db(databaseName);
    // db.collection("user").insertOne({
    //     name:"pabina",
    //     age:24
    // },(error,result)=>{
    //     if(error){
    //         return console.log("unable to connect")
    //     }
    //     console.log(result.ops)
    // })

    // db.collection("user").insertMany([{
    //     name:"chandrakala",
    //     age:24},
    //     {
    //         name:"rimal",
    //         age:23
    //     }],(error,result)=>{
    //         if(error){
    //             return console.log("unable to insert many")
    //         }
    //         console.log(result.ops)
    //     })


    //challenge one for mongodb
    db.collection("task").insertMany([
        {name:"task1",description:"this is task one",completed:true},
        {name:"task1",description:"this is task one",completed:false},
        {name:"task1",description:"this is task one",completed:true}

    ],(error,result)=>{
        if(error){
          return  console.log("unable to inser task")
        }
        console.log(result.ops)
    })
})
