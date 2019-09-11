const coffeeShop = {
    beans: 40,

    money: 100,

    drinkRequirements: {
        latte: 10,
        americano: 5,
        doubleShot: 15,
        frenchPress: 12
    },

    buyBeans: function (numBeans) {
        const beanCost = 2;
        const total = numBeans * beanCost
        
        if( this.money < total ){
            alert("Not enough money");
            return;
        }

        this.money -= total;
        this.beans += numBeans;
    },

    makeDrink: function (drinkType) {
        // TODO: Finish this method
        const drinkRequirements = this.drinkRequirements[drinkType];

        if (drinkRequirements === undefined) {
            alert(`Sorry, we don't make ${drinkType}`)
            return;
        }

        if (this.beans < drinkRequirements) {
            alert(`Sorry, we're all out of beans!`)
            return;
        }

        this.beans -= drinkRequirements;
    }
}


coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"

coffeeShop.buyBeans(40);
coffeeShop.makeDrink("frenchPress")