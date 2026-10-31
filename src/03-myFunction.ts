

function getUpper(username: string){
    return username.toUpperCase()
}

const username = getUpper('Ujjwal')

function addTwo(value: number){
    return 2 + value
}

function isLoggedIn(value: boolean){
    return `this is ${value}`
}

const checkLoggedIn = isLoggedIn(false)

function loggedInPage(username: string, email: string, isPaid: boolean = false){
    if(isPaid) return `User is paid user`
    return 400
}

const checkPaidUser = loggedInPage('Ritesh','r@code.com' )
// console.log(typeof checkPaidUser)
if(checkLoggedIn === "400"){
    // console.log('Checeked')
}


const getVal = (n: number): string | number =>{
    if(n > 100){
        return 200
    }
    return 'I am working'
}

function checkErrormsg(msg: string):void {
    console.error(msg)
}

function handleError(err: string): never{
    throw new Error(err)
}

type Role = "admin" | "user"

const authorizeduser = (role: Role): string => {
    switch (role) {
        case "admin":
            return `you can do anything`
        case "user":
            return  `you can do anything`
        default:
            const _unauthorized : never = role
            throw new Error(`Invalid role ${_unauthorized}`)
    }
}

// authorizeduser('admin')
// authorizeduser("Developer")


// console.log(addTwo("Ujjwal"))
// console.log(addTwo(false))
// console.log(addTwo(NaN))
// console.log(addTwo(null))
// console.log(addTwo(32))