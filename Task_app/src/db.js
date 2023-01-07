const mongoose = require("mongoose");


mongoose.set('strictQuery', true)
mongoose.connect("mongodb://localhost:27017/mytask_app", { useNewUrlParser: true })
  .then(() => {
    console.log("database connected successfully")
  })
  .catch((erro) => {
    console.log("error")
  });
