

interface Takephoto{
    cameraMode: String,
    blur: number,
    size: [number, number]
}


class Instagram implements Takephoto{
    constructor(
        public cameraMode: string,
        public blur: number,
        public size: [number, number]
    ){}
}

interface TakeTime{
    calTime(): string
}

class Youtube implements Takephoto, TakeTime{
    constructor(
        public cameraMode: string,
        public blur: number,
        public size: [number, number]
    ){}
    calTime(): string {
        return `The Date is ${new Date().toLocaleDateString}`
    } 
}
