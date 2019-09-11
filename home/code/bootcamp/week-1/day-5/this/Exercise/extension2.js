const coffeeShop = {
    beans: 40,

    money: 100,

    drinkRequirements: {
        latte: { beanRequirement: 10, price: 30 },
        americano: { beanRequirement: 5, price: 15 },
        doubleShot: { beanRequirement: 15, price: 45 },
        frenchPress: { beanRequirement: 12, price: 36 }
    },

    buyBeans: function (numBeans) {
        const beanCost = 2;
        const total = numBeans * beanCost

        if (this.money < total) {
            alert("Not enough money");
            return;
        }

        this.money -= total;
        this.beans += numBeans;
    },

    buyDrink: function (drinkType) {
        let drinkServed = this.makeDrink(drinkType);

        if (drinkServed) {
            this.money += this.drinkRequirements[drinkType].price;
        } else {
            alert("Oh no, order failed")
        }
    },

    makeDrink: function (drinkType) {
        let drinkServed = false;
        // TODO: Finish this method
        const drink = this.drinkRequirements[drinkType];

        if (drink === undefined) {
            alert(`Sorry, we don't make ${drinkType}`)
            return drinkServed;
        }

        if (this.beans < drink.beanRequirement) {
            alert(`Sorry, we're all out of beans!`)
            return drinkServed;
        }

        this.beans -= drink.beanRequirement;
        drinkServed = true;
        return drinkServed;
    }
}


coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"

coffeeShop.buyBeans(30);

coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
