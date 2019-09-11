function calcAge(currentYear, birthYear) {
    if (currentYear < birthYear) {
        console.log("Wrong arguments");
        return -1;
    }

    const age = currentYear - birthYear;
    console.log(`You are either ${age - 1} or ${age}`)
}

const age = calcAge(2018, 2015)