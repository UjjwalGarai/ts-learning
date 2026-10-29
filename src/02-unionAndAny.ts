
let subscribers: string | number = 10
subscribers = '1M'

let airSeat: 'Window' | 'Middle' | 'Aisle' = "Aisle"
airSeat = 'Window'

let arry = ['21', '40', '12', '26', '78']

let expectedArr: string | undefined

for (let arr of arry){
    if (arr === '12'){
        expectedArr = arr
    }
}

console.log(expectedArr)

let anyNumber

console.log(anyNumber)
