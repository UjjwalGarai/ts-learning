
function getDetection(val: number | string){
    if(typeof val === "string"){
        return val.toUpperCase()
    }
    return val * 3
}

function getName(val: string | null){
    if(!val){
        return val?.toUpperCase()
    }
    return val
}


function getName2(val: string | string[] | null){
    if(val){
        if(typeof val === "object"){
            for (const s of val){
                console.log(s)
            }
        }else if(typeof val === "string"){
            console.log(val)
        }
    }
}

getName2("Ujjwal")
getName2(["Tiyasa", "Sampa" ])



function getInstanceValue(value: Date | Array<string>){
    if(value instanceof Array){
        for(const s of value){
            console.log(s)
        }
    } else if( value instanceof Date){
        console.log(value.getMonth())
    }

}

getInstanceValue(["Ujjwal", "Dida"])
getInstanceValue(new Date())

interface User{
    name: string,
    emial: string
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdmin(user: Admin | User){
    if("isAdmin" in user){
        return user.isAdmin
    }
}

type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if (isFish(pet)) {
        pet
        return "fish food"
    } else {
        pet
        return "bird Food"
    }
}

const fishCheck = isFish({
    swim() {
        console.log('This is a Fish')
    },
})

// console.log(getFood(fishCheck))

interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square"
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    //return shape.side * shape.side
}


function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side
        case "rectangle":
            return shape.length * shape.width

        default:
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}