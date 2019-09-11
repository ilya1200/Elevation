const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
}

//Object.keys version
for(let letter of Object.keys(dictionary)){
    const words = dictionary[letter]
    console.log(`Words that begin with  ${letter}:`)

    for(let word of words){
        console.log(`\t${word}`)
    }
}

//for-in version
for(let letter in dictionary){
    const words = dictionary[letter]
    console.log(`Words that begin with  ${letter}:`)

    for(let word of words){
        console.log(`\t${word}`)
    }
}