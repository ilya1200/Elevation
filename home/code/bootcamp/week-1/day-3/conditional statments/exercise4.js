const isVIP = false
let cash = 500

const canEnterClub = (isVIP || cash>300)


if(canEnterClub){
    console.log("Hi")
}else{
    console.log("You need a VIP, or 300 cash to enter")
}