// variables with type
let fname: string = "Dora";
// let age: number = 8;
let isWorker: boolean = false;
let age: string = "8";

// array with type------------------------------
let schools: string[] = ["knust", "ucc", "legon"]

//tuple-----------------------------------------
let worker: [string, number] = ["John", 55]

//enum-------------------------------------------
enum weekDays {
    Monday, Tuesday, Wednesday, Thursday, Friday
}

//function----------------------------------------
function add(num1: number, num2: number): string{
    return age+num2;
}

//generics---------------------------------------
function identity<T>(val: T){
    return val;
}

class GenericNum<T>{
    zeroValue!: T;
    add!: (a: T, b: T) => T;
}

let genericNum = new GenericNum<string>();
genericNum.add = (a, b) => a + b;

console.log(genericNum.add("hello, ", "Mike"));

let lengthIdentity = <T extends {length: number}>(args: T): T => {
    console.log(args.length);
    return args;
}

console.log(lengthIdentity<string>("Ebo Ray"));






