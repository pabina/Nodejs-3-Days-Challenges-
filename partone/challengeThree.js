//for video
// let chalk=require('chalk')
// const myname=process.argv[2];
// const mytitle=process.argv[3];

// const mydata=[myname,mytitle];

// console.log(mydata);




//challengethree
let yargs=require("yargs");

// console.log(process.argv);
// console.log(yargs.argv);

//create add commands

yargs.command({
    command:"add",
    describe:'new file added',
    handler:function(){
        console.log("one file is added")
    }
})

//create remove command
yargs.command({
    command:"remove",
    describe:"one file is remove",
    handler:function(){
        console.log("file is remove")
    }
})


//create list command
yargs.command({
    command:"list",
    describe:"this is list command",
    handler:function(){
        console.log("added file is listed")
    }
})


//create read command
yargs.command({
    command:"read",
    describe:"this is read command",
    handler:function(){
        console.log("read command is active now")
    }
})

//for my knowledge lets create sum commands
yargs.command({
    command:"sum",
    describe:"i want to sum 2 data",
    handler:function(){
        let a=2, b=3
        let c=a+b;
        console.log(c);
    }
})

console.log(yargs.argv)




// yargs.command({
//     command:"list",
//     description:"hello this is list one",
//     handler:function(){
//         console.log("this is list function")
//     }
// })
