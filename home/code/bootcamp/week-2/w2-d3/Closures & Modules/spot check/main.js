//Check Spot 1
// const family = function(){
//     const members = []

//     const birth =  function(name){
//         members.push(name);
//         console.log(members);
//     }

//     return birth;
// }

// const giveBirth = family();
// giveBirth("a")
// giveBirth("b")
// giveBirth("c")


//Check Spot 2
// const mathOps = function(){
//     const add = (x,y)=>x+y;
//     const sub = (x,y)=>x-y;
//     const mult = (x,y)=>x*y;
//     const div = (x,y)=>x/y;

//     return {
//         add,
//         sub,
//         mult,
//         div
//     }
// }

// const mo = mathOps();

// console.log(mo.add(13,29))
// console.log(mo.mult(1.75,24))
// console.log(mo.mult(mo.div(36,6),7))

//Check Spot 3

const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        console.log(..._users)
        // for (let user of _users) {
        //     console.log(user)
        // }
    }

    return {
        addUser: addUser,
        listUsers: listUsers
    }
}

const usersModule = UsersModule()
usersModule.listUsers()

usersModule.addUser('Narkis')
usersModule.listUsers()

usersModule.addUser('Dor')
usersModule.listUsers()

usersModule.addUser('Hen')
usersModule.listUsers()

// console.log(userModule.users)


