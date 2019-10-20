const users = require("./users");

const cNames = users
    .filter(user => user.name.charAt(0).toUpperCase() === "C")
    .map(cNamedUser => cNamedUser.name)

console.log(cNames);   