const nums = [0, 1, 1, 3, 5, 8, 13];
let sum = 0;

for (let number of nums) {
    sum += number;
}

const average = sum / nums.length;

console.log("Numbers: ",nums)
console.log("The sum ", sum)
console.log("The average ", average)