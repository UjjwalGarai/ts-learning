

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
console.log(typeof checkPaidUser)
if(checkLoggedIn === "400"){
    console.log('Checeked')
}

// console.log(addTwo("Ujjwal"))
// console.log(addTwo(false))
// console.log(addTwo(NaN))
// console.log(addTwo(null))
// console.log(addTwo(32))