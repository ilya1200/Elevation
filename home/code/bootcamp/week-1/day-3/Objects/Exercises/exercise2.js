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
    }
]


console.log("The original list: ");
console.log(myList);

myList[0].age+=1;
console.log("It's Jills b-day, she is : ",myList[0].age);

myList.splice(1);
console.log("Robert was deleted from myLIst: ");
console.log(myList);
