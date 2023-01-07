const User=require("./src/models/mytask.js")
require("./src/db.js");
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
// const add=(a,b)=>{
//     return  new Promise((resolve,reject)=>{
//           setTimeout(() => {
//               resolve(a+b)
//           }, 2000);
//        })
//   }
  
//  add(2,3).then((sum)=>{
// console.log(sum)
// return add(sum,6)
//  }).then((sum2)=>{
// console.log(sum2)
//  }).catch((error)=>{
//     console.log(error)
//  })


//promise chaining practice for User

User.findOneAndUpdate("63b996e838fa03baa80bad80",{age:6}).then((result1)=>{
console.log(result1)
 return User.countDocuments({age:6})
}).then((result2)=>{
console.log(result2)
}).catch(()=>{
console.log(error)

})



