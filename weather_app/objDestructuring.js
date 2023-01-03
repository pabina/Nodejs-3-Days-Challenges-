//object destructuring practice
const myobj={
    name:"pabina",
    age:24,
    location:"Ktm",
    mydata:4
}
// const {name:myname,age,location,mydata=2}=myobj;
// console.log(name);
// console.log(myname)
// console.log(mydata)

//object destructing by function

const myfun=({name:myname,age})=>{
console.log(myname)
}
myfun(myobj)
