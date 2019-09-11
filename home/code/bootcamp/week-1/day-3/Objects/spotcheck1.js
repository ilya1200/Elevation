const Car = {
    color : "white",
    numWheels: 4,
    isFancy:true
};

console.log(`The ${Car.color} car has ${Car.numWheels}. It is ${(!Car.isFancy)?"not ":""}fancy`)