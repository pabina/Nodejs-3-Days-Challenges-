//calculate tip

const calculateTip=(total,tippercent)=>{
// const tip =(total*(tippercent/100)) +total
const tip =(total*(tippercent/100)) 
return tip;
}

module.exports={calculateTip};

// console.log(calculateTip(300,20))
