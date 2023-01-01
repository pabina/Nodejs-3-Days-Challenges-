const { demandOption } = require('yargs');
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


//list command
yargs.command({
    command:"list",
    describe:"this is list command",
    handler(){
        notes.listNotes();
    }
})


//read command
yargs.command({
    command:"read",
    describe:"this is read command by title",
    builder:{
title:{
    describe:"title is required",
    demandOption:true,
    type:"string"
}
    },
    handler(argv){
        notes.readNotes(argv.title);
    }
})



yargs.parse();
