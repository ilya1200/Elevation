
//===================================================================================//Section 2//===================================================================================
if (13 == "space") {
    let cowSound = "moo"
}
else {
    console.log("Cow says " + cowSound)
}


/**
 * 
 *  What will console log?
 *      Error
    Will there be an error?
        Yes
    Why?
        Because cowSound is known only inside the if, but not in else
    Will something be undefined?
    Why?
    To what scope does each variable belong?
    Global or local? If local, to which specifically?
        cowSound - block scope, since it is defined with let
 */