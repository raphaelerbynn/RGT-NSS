
//-------variables
const age: number = 20; //a number
const full_name: string = "George Amah"; //a string
const isWorker: boolean = false;
console.log(`His name is ${full_name}. He is ${age} years old and is his working status is ${isWorker}.`);

//arrays
const friends: string[] = ["Ann, John", "Kate"];

//tuples
const studentDetails: [number | string, string, string] = ["id202", "Emmanuel Clay", "Class 4"];

//enumerators
enum telecoms {
    MTN, VODAFONE, TIGO, GLO
}

//annotations and inference
const positiveNumber = 25; //infered
const fileName = "cap.txt"; //infered

const isRed: boolean = true; //annotated

//functions
function getAge(year: number): number{
    const curYear = new Date().getFullYear();
    return (curYear - year)
}

console.log(getAge(2000));

function getTotalStudents(students: string[]): number{
    return students.length;
}

console.log(getTotalStudents(["Emma", "Nana"]));

const getLength = (word: string): number => {
    return word.length;
}


//interfaces
interface Vehicle{
    name: string;
    type: string;
    tyres: number;
    getString(): string
}

const myBike: Vehicle = {
    name: "Mountain Bike",
    type: "Bicycle",
    tyres: 5,
    getString(){
        return this.name;
    }
}
console.log(myBike);

//classes
class Car implements Vehicle{
    name: string;
    type: string;
    tyres: number;
    doors: number;

    constructor(name: string, type: string, doors: number, tyres: number) {
        this.name = name;
        this.type = type;
        this.doors = doors;
        this.tyres = tyres;
    }

    //method
    hasGoodBalance(): boolean{
        return this.tyres > 3;
    }

    //method
    getDoors(): number{
        return this.doors;
    }

    getString(): string {
        return `This is a ${this.type} ${this.name} with ${this.tyres} tyres and ${this.doors} doors.`
    }

}

//instance of class
const benz = new Car("Benz", "c-300", 4, 4);
console.log(benz.getString());


