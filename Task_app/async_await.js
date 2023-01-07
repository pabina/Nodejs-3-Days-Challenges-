



//async await function
const add=async(a,b)=>{
  return a+b
 
}
add(2,3).then((sum)=>{
console.log(sum)
}).catch((e)=>{
    console.log(e)
})


// add(2,3).then((sum)=>{
// console.log(sum)
// return add(sum,3)
// }).then((sum2)=>{
// console.log(sum2)
// }).catch((e)=>{
//     console.log(e)
// })
