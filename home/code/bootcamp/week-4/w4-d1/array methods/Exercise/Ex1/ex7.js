const users = require("./users");

function printSummary(user){
    const name = user.name;
    const city = user.address.city;
    const companyName = user.company.name;
    console.log(`${name} lives in ${city}, and owns the company ${companyName}`);
}

users.forEach(printSummary);