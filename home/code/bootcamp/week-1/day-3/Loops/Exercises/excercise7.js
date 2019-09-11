const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let i = 0; i < names.length; i++) {
    const newPerson = {
        name: names[i],
        age: ages[i]
    };
    people.push(newPerson);
}

//Exercise 8

for(let person of people){
    const name = person.name;
    const age = person.age;

    console.log(`${name} is ${age} years old`)
}