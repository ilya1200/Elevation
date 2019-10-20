const users = require("./users");

const apt950suite = users.find(user => user.address.suite === "Apt. 950");

console.log(apt950suite.company.name);