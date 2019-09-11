const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: false,//false, // choose one
    fridge: {
        price: 500,
        works: false,//false, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}


const hasOven = kitchen.hasOven;
const works = kitchen.fridge.works;

const fridgeItem = kitchen.fridge.items[1].name;
const days = date-fridgeItem.expiryDate;
const payment = kitchen.fridge.price / 2

if(hasOven && works){
    console.log(`${kitchen.owner}'s ${fridgeItem} expired ${days} day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the raddish in.`);
}

if(!hasOven && works){
    console.log(`${kitchen.owner}'s ${fridgeItem} expired ${days} day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the raddish in.`);
}

if(hasOven && !works){
    console.log(`${kitchen.owner}'s ${fridgeItem} expired ${days} day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the raddish in. And she'll have to pay ${payment} to fix the fridge.`);
}

if(!hasOven && !works){
    console.log(`${kitchen.owner}'s ${fridgeItem} expired ${days} day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the raddish in. And she'll have to pay ${payment} to fix the fridge.`);
}
