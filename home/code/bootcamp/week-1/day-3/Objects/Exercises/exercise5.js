const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

const name = prompt('Please enter the name for your reservation').toLowerCase();
// const normalizedName = name.charAt(0).toUpperCase() + name.splice(1,name.length-1)

if (reservations[name]) {
    if (!reservations[name].claimed) {
        console.log("Welcome " + name)
    } else {
        console.log("Hmm, someone already claimed this reservation")
    }
}else{
    console.log("You have no reservation")
    reservations[name] = { claimed: true }
    console.log(`${name}'s reservation added`)
}

console.log(reservations);
