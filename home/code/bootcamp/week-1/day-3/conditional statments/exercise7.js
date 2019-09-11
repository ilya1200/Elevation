let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018


if(boughtTesla && isUSCitizen){
    const yearsAgo = currentYear-yearOfTeslaPurchase
    if(yearsAgo < 4){
        console.log("Would you like to upgrade?")
    }else{
        console.log("Are you satisfied with your car?")
    }
}

if(!isUSCitizen && boughtTesla){
    console.log("Would you like to move to US?")
}

if(!boughtTesla){
    console.log("Do you want a Tesla?")
}