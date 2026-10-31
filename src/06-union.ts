let followers: number | string = 23
followers = "1M"

type User = {
    name: string,
    score: string | number
}
type Admin = {
    username: string,
    isLogged: boolean
}

const user1:User = {name: "Ujjwal", score: 24}
const user2:User = {name: "Tiyasa", score: "24"}

const user3: User | Admin = {username: "Sampa", isLogged: false}
const user4: User | Admin = {name: "Sampa", score: "67"}


const scores: number[] = [1, 2, 3, 4]
const scores2: string[] = ["Alpha", "Lock"]
const scores3: string | number[] = [1, 4, 6]
const scores4: string | number[] = "Ujjwal"
// const scores5: string[] | number[] = ["Ujjwal", 23] // It Wont work
const scores6: (string | number)[] = ["Ujjwal", 23]

function checkDBConnection(id: number | string){
    if(typeof id === "string"){
        const idUpperCase = id.toUpperCase()
    }
    console.log(`The id is ${id}`)
}

checkDBConnection(24)