let fs=require('fs');
let yargs=require("yargs");
const mydata={
    name:"pabina",
    age:24
}
const mydataJson=JSON.stringify(mydata)
const myrealdata=JSON.parse(mydataJson)



yargs.command({
    command:"add",
    describe:"add new info",
    builder:{
        name:{
            describe:"name is required field",
           demandOption:"true",
           type:"string",
        },
        age:{
            describe:"age is required field",
          demandOption:"true",
          type:"number",
        }
    },
    handler:function(argv){
       const myInfoData={name:argv.name,age:argv.age}
      const myinfoJsonData=JSON.stringify(myInfoData);
     
      fs.writeFileSync("mynote.json",myinfoJsonData);
    const res= (fs.readFileSync("mynote.json")).toString();
    console.log(res);
    }
})

yargs.parse();