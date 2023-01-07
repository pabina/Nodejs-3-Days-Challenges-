
//simple  promise method

// const add=(a,b)=>{
//   return  new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(a+b)
//         }, 2000);
//      })

// }

// add(2,3).then((sum)=>{
//   console.log(sum) 
// }).catch((error)=>{
// console.log(error)
// })


//promise chaining by simple method

// const add=(a,b)=>{
//     return  new Promise((resolve,reject)=>{
//           setTimeout(() => {
//               resolve(a+b)
//           }, 2000);
//        })
  
//   }
  
//   add(2,3).then((sum)=>{
//     console.log(sum)
//     add(sum,2).then((sum2)=>{
// console.log(sum2)
//     }) .catch((error)=>{
// console.log(error)
//     })
//   }).catch((error)=>{
//   console.log(error)
//   })



//promise chaining in optimise way
const add=(a,b)=>{
    return  new Promise((resolve,reject)=>{
          setTimeout(() => {
              resolve(a+b)
          }, 2000);
       })
  }
  
 add(2,3).then((sum)=>{
console.log(sum)
return add(sum,6)
 }).then((sum2)=>{
console.log(sum2)
 }).catch((error)=>{
    console.log(error)
 })