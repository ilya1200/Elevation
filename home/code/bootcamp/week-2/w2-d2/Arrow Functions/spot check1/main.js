// spot check 4

// const square = number => console.log(number*number)

// for(let i = 1 ; i<10;i++){
//     square(i);
// }

// spot check 5

// const getFormalTitle = (title,name)=> `${title} ${name}`


// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"


// let x = {
//     count: 12,
//     go: () => {
//         setTimeout(function () {
//             console.log(this.count)
//         }, 1500)
//     }
// }
// x.go()



const run = (name) => {console.log("Run, " + name + ", run!")}
const yell = function(action){
    let env = "Forest"
    action(env)
}
run(yell)
