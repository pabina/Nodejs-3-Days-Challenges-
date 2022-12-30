
//creating add command
let yargs=require("yargs");

yargs.command({
    command:"add",
    describe:" new note added",
    builder:{
       title:{
        describe:"title is required field",
        demandOption:"true",
        type:"string",
       },
       description:{
        describe:"description is required field",
        demandOption:"true",
        type:"string"
       }
    },
    handler:function(argv){
        console.log(argv.title)
        console.log(argv.description)
    }
})

yargs.parse();