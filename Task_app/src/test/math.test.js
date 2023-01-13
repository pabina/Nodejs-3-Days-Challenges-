const {calculateTip} = require(".././math.js")



 //math test
 test("math test",()=>{
   const totaltips= calculateTip(200,30);
   expect(totaltips).toBe(60)
 });

//math default test
test("math default test",()=>{
    const totaltips= calculateTip(200);  
    expect(totaltips).toBe(20) 
})