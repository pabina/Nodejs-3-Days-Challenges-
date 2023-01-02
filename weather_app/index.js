
console.log("starting");

setTimeout(()=>{
    console.log("run after 2 second");
},2000)

setTimeout(()=>{
    console.log("run after 0 second");
},0)

console.log("stopping");