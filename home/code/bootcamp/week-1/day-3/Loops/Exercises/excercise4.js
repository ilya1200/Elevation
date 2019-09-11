const start = 1;
const stop = 100;
const step = 1;

const hundredNumbers = []

for(let cur = start;cur<=stop;cur+=step ){
    hundredNumbers.push(cur)
}

console.log("Array should have 100 items "+ hundredNumbers.length);
console.log("First item should be 1 :"+hundredNumbers[0])
console.log("Last item should be 100 :"+hundredNumbers[hundredNumbers.length-1])

//Exercise 5

console.log("Now will print all odd numbers")
const oddNumbers = [];
for(let number of hundredNumbers){
    if(number%2 ===1){
        oddNumbers.push(number)
    }
}

console.log("oddNumbers:")
console.log(oddNumbers)
