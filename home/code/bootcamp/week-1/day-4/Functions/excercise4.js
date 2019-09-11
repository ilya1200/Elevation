function isEven(number) {
    return (number % 2 === 0);
}

function findOdds(numbers) {
    const oddNumbers = []

    for (let number of numbers) {
        if (!isEven(number)) {
            oddNumbers.push(number);
        }
    }

    return oddNumbers;
}

function printOdd(numbers) {
    const oddNumbers = findOdds(numbers);

    for (let oddNumber of oddNumbers) {
        console.log(`The number ${oddNumber} is odd`)
    }
}

printOdd([1, 2, 3, 4, 5, 6, 7, 8])