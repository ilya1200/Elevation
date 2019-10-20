const users = require("./users");

const zipUsersIDs = users
    .filter(user => user.address.zipcode.charAt(0) === "5")
    .map(user => user.id)

console.log(zipUsersIDs);   