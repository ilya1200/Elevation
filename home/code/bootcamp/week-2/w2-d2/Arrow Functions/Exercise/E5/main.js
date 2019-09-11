const capitalize = str => {
    const lowerStr = str.toLowerCase();
    const firstChar = lowerStr.slice(0, 1).toUpperCase();
    const restStr = lowerStr.slice(1);

    return firstChar + restStr;
}

console.log(
    capitalize("bOb"),
    capitalize("TAYLOR"),
    capitalize("feliSHIA")
)

// capitalize("bOb") // returns Bob
// capitalize("TAYLOR") // returns Taylor
// capitalize("feliSHIA") // returns Felishia
