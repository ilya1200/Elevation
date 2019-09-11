

const myList2 = [
    {
        name: "Tom",
        age: 25,
        city: "Ashkelon"
    },
    {
        name: "Jim",
        age: 25,
        city: "Beer-sheva"
    }
]

console.log("The original myList2: ",myList2);

const myList = [
    {
        name: "Jill",
        age: 25,
        city: "Tel-Aviv"
    },
    {
        name: "Robert",
        age: 25,
        city: "Haifa"
    },
    ...myList2
]


console.log("myList: ",myList);


