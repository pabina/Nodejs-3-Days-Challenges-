// //calculate tip

// const calculateTip=(total,tippercent=10)=>{
// // const tip =(total*(tippercent/100)) +total
// const tip =(total*(tippercent/100)) 
// return tip;
// }


//challenges test
const FahrenheitToCelsius=(temp)=>{
    return(temp-32)/1.8
}

const CelsiusToFahrenheit=(temp)=>{
    return (temp * 1.8)+32
}



//promise function
const PromiseFunction=(num1,num2)=>{
   return new Promise((resolve,reject)=>{
    if(num1<0 ||num2<0){
      return  reject("cant include value less then zero")
    }
    resolve(num1+num2)
    })
}






module.exports={FahrenheitToCelsius,CelsiusToFahrenheit,PromiseFunction}


// module.exports={calculateTip};
