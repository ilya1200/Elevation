let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000

console.log("Basic salary: ",salary)
console.log("Performance: ",performance)

if(performance === "stellar"){
    console.log("Bonus amount: ",stellarBonus)
    salary+=stellarBonus;
}else if(performance === "good"){
    console.log("Bonus amount: ",goodBonus)
    salary+=goodBonus;
}


console.log("Total salary: ",salary)