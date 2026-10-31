
enum seatChoise {
    AISLE,
    MIDDLE,
    WINDOW

}

enum seatChoise2 {
    AISLE = 24,
    MIDDLE = "MIDDLE",
    WINDOW = 21

}

const yourSeat = seatChoise.MIDDLE
const yourSeat2 = seatChoise2.MIDDLE
console.log(yourSeat);
console.log(yourSeat2);


const enum seatChoise3 {
    AISLE = 24,
    MIDDLE = "MIDDLE",
    WINDOW = 21

}

console.log(seatChoise3.WINDOW)

