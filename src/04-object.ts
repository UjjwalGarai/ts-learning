

// const adminUser = { name: 'H', email: 'h@.c.com' }

// console.log(adminUser)
// function createUser({name: 'ujjwal'}) {
//     return 'Hi'
// }

// createUser(name: 'H', email: 'h@.c.com')

// type User = {
//     name: string,
//     age: number
// }

// function makeUser(user: User): User{
//     return {name: user.name, age: user.age}
// }

// console.log(makeUser({name: 'Ujjwal', age: 88}))



type User = {
    readonly _id: string, // For JS it will allow you to change/edit
    name: string,
    email:string,
    isActive: boolean,
    creditcard?: number // ? sign make it optional
}

const user1: User = {
    _id: "123d43",
    name: "Ujjwal",
    email: "u@google.com",
    isActive: false
}

// user1._id = "4321"

// console.log(user1)

type cardnumber = {
    number: string,
}
type carddate = {
    date: string
}

type cardDetails = cardnumber & carddate & {cvv: number}

const userCard:cardDetails = {number: "2123", date: "03/20/2020", cvv: 213}

console.log(userCard)