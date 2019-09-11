const coffeeShop = {
    beans: 40,

    drinkRequirements: {
        latte: 10,
        americano: 5,
        doubleShot: 15,
        frenchPress: 12
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

