const { MongoClient, ObjectID } = require("mongodb");

//practice for the object id
// let id=new ObjectID;
// console.log(id)
// console.log(id.generate())
// console.log(id.generate().length)
// console.log(id.getTimestamp());
// console.log(id.toHexString())
// console.log(id.toHexString().length)

const connectUrl = "mongodb://localhost:27017";
const databaseName = "taskManager";

MongoClient.connect(connectUrl, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to Connect to Database");
  }
  console.log("Successfully Connect to Database");

  const db = client.db(databaseName);

  //insert challenges
  // db.collection("user").insertOne({
  //     _id:id,
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

  //challenge one for mongodb insert
  // db.collection("task").insertMany([
  //     {name:"task1",description:"this is task one",completed:true},
  //     {name:"task2",description:"this is task two",completed:false},
  //     {name:"task3",description:"this is task three",completed:true}

  // ],(error,result)=>{
  //     if(error){
  //       return  console.log("unable to inser task")
  //     }
  //     console.log(result.ops)
  // })

  // 3.challenge for mongodb find
  // db.collection("task").findOne({_id:new ObjectID("63b7dc464fad0f11e8af90c6")},(error,lasttask)=>{
  //     if(error){
  //       return  console.log("unable to find")
  //     }
  //     console.log(lasttask)
  // })
  //question 2
  //   db.collection("task").find({completed:true}).toArray((error,completedtask)=>{
  //     if(error){
  //         return console.log("unable to find")
  //     }
  //     console.log(completedtask)
  //   })

  //challenge for updateone
  //  const promiseUpdate= db.collection("user").updateOne({_id:new ObjectID("63b7dc96bd7bbf29bc19ed9d")},{$set:{name:"moonart"}})

  // promiseUpdate.then((result)=>{
  // console.log(result.result.nModified)
  // }).catch((error)=>{
  // console.log(error)
  // })

  // for challenge
  db.collection("task")
    .updateMany({ completed: false }, { $set: { completed: true } })
    .then((result) => {console.log(result.result.nModified)}).catch((error)=>{
        console.log(error)
    });

  // promiseUpdate.then((result)=>{
  // console.log(result.result.nModified)
  // }).catch((error)=>{
  // console.log(error)
  // })
});
