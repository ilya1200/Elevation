//===================================================================================
//Section 4
//===================================================================================
const pot = "red pot with earth in it"

const getSeed = function () {
    const seed = "brown seed"
}

const plant = function () {
    getSeed()
    console.log("Planting the " + seed + " inside a " + pot)
}

plant()

/**
 * What will console log?
Will there be an error?
    Yes
Why?
    Because, seed is not declared inside plant function
Will something be undefined?
Why?
To what scope does each variable belong?
Global or local? If local, to which specifically?
    pot - is global
    seed - is local to getSeed
 */