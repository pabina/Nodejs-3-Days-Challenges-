//calculate tip

const calculateTip=(total,tippercent=10)=>{
// const tip =(total*(tippercent/100)) +total
const tip =(total*(tippercent/100)) 
return tip;
}

module.exports={calculateTip};

// console.log(calculateTip(300,20))
