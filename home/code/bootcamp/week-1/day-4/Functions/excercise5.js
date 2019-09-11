function checkExists(numbers,value){
    let isFound = false;
    for(let number of numbers){
        if(number === value){
            isFound = true;
            return isFound;
        }
    }
    return isFound;
}

console.log(checkExists([1, 2, 3], 2))
console.log(checkExists([1, 2, 3], 5))