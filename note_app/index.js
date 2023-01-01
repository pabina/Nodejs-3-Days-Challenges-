let yargs=require('yargs');
const note = require('./note');
let notes=require('./note');


//add command
yargs.command({
    command:"add",
    describe:"this is add section",
    builder:{
       title:{
        describe:"title is required filed",
        demandOption:"true",
        type:"string"
       } ,
       body:{
        describe:"body is required filed",
        demandOption:"true",
        type:"string"
       } 
    },
    handler:function(argv){    
    notes.addNotes(title=argv.title,body=argv.body);
    }
})


//remove command
yargs.command({
    command:"remove",
    describe:"this is for remove command",
    builder:{
        title:{
            describe:"title is require filed",
            type:"string",
            demandOption:true
        }
    },
    handler:function(argv){
      note.removeNotes(argv.title)
    }
})


yargs.parse();
