//===================================================================================
//Section 3
//===================================================================================
const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder)
    }

    console.log("Finished serving all the orders: " + orders)
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)


/**
 * What will console log?
 *      "Served a special fish"
 *      "Served a lettuce plate"
 *      "Served a curious cheese"
 *      "Finished serving all the orders: fish,lettuce plate,curious cheese"
    Will there be an error?
        NO
    Why?
    Will something be undefined?
    Why?
    To what scope does each variable belong?
    Global or local? If local, to which specifically?
        allOrders will be global
        orders will be local to serveOrders
        order, specialOrder will be local to the for-of




 */