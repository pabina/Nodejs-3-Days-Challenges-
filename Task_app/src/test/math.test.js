// const {calculateTip} = require(".././math.js")
const {FahrenheitToCelsius,CelsiusToFahrenheit,PromiseFunction}=require("../math.js");




 //math test
//  test("math test",()=>{
//    const totaltips= calculateTip(200,30);
//    expect(totaltips).toBe(60)
//  });


//math default test
// test("math default test",()=>{
//     const totaltips= calculateTip(200);  
//     expect(totaltips).toBe(20) 
// })

//challenge one

test("fahrenheittocelsius test",()=>{
  const CelsiusTemp= FahrenheitToCelsius(32);
  expect(CelsiusTemp).toBe(0)
})


test("celsiustofahrenheit test",()=>{
    const FahrenheitTemp= CelsiusToFahrenheit(0);
    expect(FahrenheitTemp).toBe(32)
  })



  //testing asynchronous function callback method
//   test("first async function", (done)=>{
//     setTimeout(() => {
//         expect(2).toBe(1)
//         done();
//     }, 2000);
//   })



  //testing asynchronous function of promises method
  test("this is promise",(done)=>{
 PromiseFunction(-1,3).then((result)=>{
    expect(result).toBe(5)
    done();
 })
  })

  
  
