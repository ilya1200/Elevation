const users = require("./users");
console.log(users.every(user => user.address.city === "South Christy"));