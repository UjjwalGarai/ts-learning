

interface User{
    readonly dbId: number,
    name: string,
    email:string,
    googleAccount?: string,
    // startTrial: () => string
    startTrial(): string,
    getCoupon(name: string, value: number): string
}

interface User{
    githubAccount: string
}

interface Admin extends User{
    role: 'admin' | 'manager' | 'Editor'
}


const trialUser: Admin = {
    dbId: 12,
    name: "Tiyasa",
    role: 'Editor',
    email: "t.iyasa@com",
    githubAccount: "t@gaa.com",
    startTrial: () =>{
        return 'Trial Started'
    },
    getCoupon(name, code) {
        return `Your Coupon is appliyed`
    },
}

console.log(trialUser.startTrial());
console.log(trialUser.getCoupon("free",40));
console.log(trialUser);


// trialUser.dbId = 34