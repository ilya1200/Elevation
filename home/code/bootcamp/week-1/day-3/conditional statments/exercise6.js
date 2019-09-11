const gender = null
let profession = "business"

if(!gender){
    profession += "person"
}

if(gender ===  "male"){
    profession += "man"
}

if(gender ===  "female"){
    profession += "woman"
}

console.log("profession:",profession)