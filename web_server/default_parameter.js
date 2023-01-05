//practice one
// const greeting=(name="user")=>{
// console.log("hello "+name)
// }

// greeting("pabina");
// greeting();




//practice two
const mydata={
    price:200,
    quantity:4,
    name:"nameOne"
}

const transection=(type=defaultType,{price,quantity=3,name}={})=>{
console.log(type)
// console.log(price);
console.log(quantity);
}

transection("order",mydata);
// transection(mydata);
transection("order");


