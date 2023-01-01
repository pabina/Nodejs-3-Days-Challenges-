let yargs=require('yargs');
let notes=require('./note');



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


yargs.parse();
