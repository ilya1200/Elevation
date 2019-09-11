//===================================================================================
//Section 5
//===================================================================================
const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
    for (let u of users) {
        if (u.name == name) {
            const found = true
        }
    }
    return found
}

const userExists = doesUserExist("Lucius")
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}

/**
 * What will console log?
Will there be an error?
    YES
Why?   
    return found - will cause the error, since found is local to the if statment,
     but here it is out of scope
Will something be undefined?
Why?
To what scope does each variable belong?
Global or local? If local, to which specifically?
 */