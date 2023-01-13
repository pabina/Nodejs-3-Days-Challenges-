const {calculateTip} = require(".././math.js")

// test('hello people',
//  () => {  })

//  //second test
//  test("",()=>{

//  })

 //third test
 test("math test",()=>{
   const totaltips= calculateTip(200,30);

   if(totaltips !==60){
    throw new Error("tips should be 60 rs got"+ totaltips);
   }
 });
