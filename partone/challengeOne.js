const fs=require("fs");
fs.writeFileSync("first.txt","hello pabina how are you");
fs.appendFileSync("first.txt"," this content should be added");




//for video 2
// const myname="pabina rimal";
// console.log("hello pabina");
// const myfun=(a,b)=>{
// return a+b
// }
// module.exports=myname;
// module.exports=myfun;
// module.exports={myname,myfun}



// for challenge 2
const mynote=()=>{
    // buffer.toString("utf-8", 0, 12)
    let myfile=fs.readFileSync("first.txt");
    return myfile.toString();
}

module.exports =mynote;