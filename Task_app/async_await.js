




//async await function
const add=async(a,b)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
       resolve(a+b) 
    }, 200);
  })
}


const asyncfun=async()=>{
const sumfirst =await add(2,3);
const sumsencond = await add(sumfirst,8);
const sumthird=await  add(sumsencond,10);
return sumthird;
}

asyncfun().then((result)=>{
console.log(result)
}).catch((error)=>{
    console.log(error)
})




// add(2,3).then((sum)=>{
// console.log(sum)
// }).catch((e)=>{
//     console.log(e)
// })


// add(2,3).then((sum)=>{
// console.log(sum)
// return add(sum,3)
// }).then((sum2)=>{
// console.log(sum2)
// }).catch((e)=>{
//     console.log(e)
// })
