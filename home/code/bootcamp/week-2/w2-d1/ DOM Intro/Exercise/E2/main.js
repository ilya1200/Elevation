const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

function checkReservation(){
    const name = document.getElementById("input").value;
    const logger = document.getElementById("logger");

    if (reservations[name]) {
        if (!reservations[name].claimed) {
            logger.textContent = "Welcome " + name;
            console.log("Welcome " + name)
        } else {
            console.log("Hmm, someone already claimed this reservation")
            logger.textContent = "Hmm, someone already claimed this reservation";
        }
    }else{
        console.log("You have no reservation")
        reservations[name] = { claimed: true }
        console.log(`${name}'s reservation added`)

        logger.textContent = `You have no reservation.\n${name}'s reservation added `;
    }
    
    console.log(reservations);
}