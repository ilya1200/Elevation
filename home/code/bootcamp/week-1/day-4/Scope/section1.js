//===================================================================================
//Section 1
//===================================================================================
const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")
    }
    console.log("Finished running " + distance + " miles")
}

console.log("Damn, you see this gal? She ran " + distance + " miles")


/**
 *  What will console log?
 *      "running" * 8 times
 *      "Finished running 8 miles"
 *      Error
 * 
 * 
    Will there be an error?
        Yes
    Why?
        Because 'distance' is undeclared outside the if statment
    Will something be undefined?
        No
    Why?
    To what scope does each variable belong?
        'distance' defined with let , hence it has block scope - it is limited to the if.
        
    Global or local? If local, to which specifically?
 * 
 */