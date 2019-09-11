const StringFormatter = function () {

    const capitalizeFirst = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

    const skewerCase = str => str.split(" ").join("-")

    return {
        capitalizeFirst,
        skewerCase
    }
}


const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy") )//should print Dorothy
console.log(formatter.skewerCase("blue box")) //should print blue-box


console.log(formatter.capitalizeFirst("dorothy") )//should print Dorothy
console.log(formatter.skewerCase("blue box  blue box  blue box")) //should print blue-box
