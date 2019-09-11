function calcAge(currentYear, birthYear) {
    if(currentYear< birthYear){
        console.log("Wrong arguments");
        return -1;
    }
    return currentYear - birthYear
}

const age = calcAge(2017, 1989)
console.log(age)