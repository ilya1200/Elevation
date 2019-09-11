// spot check 1

// const first = function (callback) {
//     setTimeout(function () {
//         console.log("should be first")
//         callback();
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first(second)

// spot check 2

// let users = []

// const getData = function (callback) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         callback()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)


// spot check 3

setInterval(function () {
    console.log(new Date())
}, 1000)
