
const vegitables: string[] = []
vegitables.push("Brinjal", "Pumpkin")
// console.log(vegitables)

const rollNumbers: number[] = []
rollNumbers.push(12, 43)
// console.log(rollNumbers);

type studetent = {
    name: string,
    rollnumber: number
}

const students: studetent[] = []
students.push({name: "ujjwal", rollnumber: 44})
const students2: Array<studetent> = []
students2.push({name: "Prasanta", rollnumber: 23})

// console.log(students, students2);


const myHeros:string[][] = []
myHeros.push(["Amithabh", "Rajni"], ["Sharukh", "Amir"])
console.log((myHeros));
