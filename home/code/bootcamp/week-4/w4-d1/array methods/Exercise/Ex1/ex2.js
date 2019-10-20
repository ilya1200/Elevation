const users = require("./users");

const zipUsers = users
    .filter(user => user.address.zipcode.charAt(0) === "5")

console.log(zipUsers);   