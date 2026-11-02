console.log("Welcome to typescript");

// Class -----------------------------------------------

// class User {
//     email:string
//     private name: string
//     readonly city: string = "Kolkata"
//     constructor(email:string, name:string){
//         this.email = email
//         this.name = name
//     }
// }

// real Example use of TS
class User {
    constructor(public email:string, public name:string){
    }
}

const ujjwal = new User("u@u.com", "Ujjwal")
// console.log(ujjwal.name)


class UserAuth {
    protected _courseCount:number = 1
    constructor(
        public firstname:string,
        public lastname:string){
    }

    private getname(){
        return `${this.firstname} ${this.lastname}`
    }

    get getfullname() :string {
        return `${this.firstname.toUpperCase()} ${this.lastname.toUpperCase()}`
    }
    set getfullname(value:string){
        const newName = value.trim().split(" ")
        console.log(newName)
        const [first, last] = newName
        if (!first || !last){
            throw new Error ('It shoul contain at least first and lastname')
            return
        }
        this.firstname = newName[0]!
        this.lastname = newName[0]!
    }
}

class Familyuser extends UserAuth{
    isFamily:boolean = true
    changeCourseCount(){
        this._courseCount = 5
    }
}

const user2 = new UserAuth("Prasan", "Raipur")
console.log(user2.getfullname)
user2.getfullname = "  Ujjwaldfsas dsfdf  "

