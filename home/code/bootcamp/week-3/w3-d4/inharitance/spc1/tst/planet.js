class Planet {
    constructor(name) {
        this.name = name;
        console.log(`The Planet ${name} created`)
    }
}


let earth = new Planet("Earth");
earth.name = "Earth 2.0"
console.log(earth.name)
