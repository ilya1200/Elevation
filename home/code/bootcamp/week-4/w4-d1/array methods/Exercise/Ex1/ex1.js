const users = require("./users");

const mappedUsers = users.map(user => {
    return { email: user.email, companyName: user.company.name }
})

console.log(mappedUsers);