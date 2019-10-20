const people = [
    {id: 1, name: "Humbert", money: 499, hasAC: false},
    {id: 2, name: "Bellatrix", money: 499, hasAC: true},
    {id: 3, name: "Mola", money: 720, hasAC: false}
]
// console.log(people.find(p.id === 2))

console.log(people.find(p => p.id === 2))
