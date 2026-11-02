
const scores: Array<number> = [1, 5, 7]
const names: Array<string> = ["Laxman", "Ram"]
const randoms: Array<string | number> = ["Ujjwal", 47]

function getPrice(val: number | string): number | string {
    return val
}

function getPlayers(val:any) : any {
    return val
}

function getValue<Type>(val: Type): Type{
    return val
}

function getName<T>(val:T):T {
    return val
}

interface Bottle{
    price: number,
    brand: string
}

const getBottle = getName<Bottle>({price: 24, brand: "JJJ"})

console.log(getBottle);

function getSearchProduct<Type>(products: Type[]): Type | undefined {
    return products[0]
}

const getMorePorduct = <Type>(products: Array<Type>) : Type | undefined => {
    return products[0]
}

const getMorePorducts = <T>(products: T[]) : T[] => {
    return products
}

const jj = getMorePorducts(["Ujjwal", 4,"Sampa"])
console.log(jj);

