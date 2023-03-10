"use strict";
//-------variables
const age = 20; //a number
const full_name = "George Amah"; //a string
const isWorker = false;
console.log(`His name is ${full_name}. He is ${age} years old and is his working status is ${isWorker}.`);
//arrays
const friends = ["Ann, John", "Kate"];
//tuples
const studentDetails = ["id202", "Emmanuel Clay", "Class 4"];
//enumerators
var telecoms;
(function (telecoms) {
    telecoms[telecoms["MTN"] = 0] = "MTN";
    telecoms[telecoms["VODAFONE"] = 1] = "VODAFONE";
    telecoms[telecoms["TIGO"] = 2] = "TIGO";
    telecoms[telecoms["GLO"] = 3] = "GLO";
})(telecoms || (telecoms = {}));
//annotations and inference
const positiveNumber = 25; //infered
const fileName = "cap.txt"; //infered
const isRed = true; //annotated
//functions
function getAge(year) {
    const curYear = new Date().getFullYear();
    return (curYear - year);
}
console.log(getAge(2000));
function getTotalStudents(students) {
    return students.length;
}
console.log(getTotalStudents(["Emma", "Nana"]));
const getLength = (word) => {
    return word.length;
};
const myBike = {
    name: "Mountain Bike",
    type: "Bicycle",
    tyres: 5,
    getString() {
        return this.name;
    }
};
console.log(myBike);
//classes
class Car {
    constructor(name, type, doors, tyres) {
        this.name = name;
        this.type = type;
        this.doors = doors;
        this.tyres = tyres;
    }
    //method
    hasGoodBalance() {
        return this.tyres > 3;
    }
    //method
    getDoors() {
        return this.doors;
    }
    getString() {
        return `This is a ${this.type} ${this.name} with ${this.tyres} tyres and ${this.doors} doors.`;
    }
}
//instance of class
const benz = new Car("Benz", "c-300", 4, 4);
console.log(benz.getString());
//# sourceMappingURL=basics.js.map