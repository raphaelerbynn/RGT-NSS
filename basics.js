//-------variables
var age = 20; //a number
var full_name = "George Amah"; //a string
var isWorker = false;
console.log("His name is ".concat(full_name, ". He is ").concat(age, " years old and is his working status is ").concat(isWorker, "."));
//arrays
var friends = ["Ann, John", "Kate"];
//tuples
var studentDetails = ["id202", "Emmanuel Clay", "Class 4"];
//enumerators
var telecoms;
(function (telecoms) {
    telecoms[telecoms["MTN"] = 0] = "MTN";
    telecoms[telecoms["VODAFONE"] = 1] = "VODAFONE";
    telecoms[telecoms["TIGO"] = 2] = "TIGO";
    telecoms[telecoms["GLO"] = 3] = "GLO";
})(telecoms || (telecoms = {}));
//annotations and inference
var positiveNumber = 25; //infered
var fileName = "cap.txt"; //infered
var isRed = true; //annotated
//functions
function getAge(year) {
    var curYear = new Date().getFullYear();
    return (curYear - year);
}
console.log(getAge(2000));
function getTotalStudents(students) {
    return students.length;
}
console.log(getTotalStudents(["Emma", "Nana"]));
var getLength = function (word) {
    return word.length;
};
var myBike = {
    name: "Mountain Bike",
    type: "Bicycle",
    tyres: 5,
    getString: function () {
        return this.name;
    }
};
console.log(myBike);
//classes
var Car = /** @class */ (function () {
    function Car(name, type, doors, tyres) {
        this.name = name;
        this.type = type;
        this.doors = doors;
        this.tyres = tyres;
    }
    //method
    Car.prototype.hasGoodBalance = function () {
        return this.tyres > 3;
    };
    //method
    Car.prototype.getDoors = function () {
        return this.doors;
    };
    Car.prototype.getString = function () {
        return "This is a ".concat(this.type, " ").concat(this.name, " with ").concat(this.tyres, " tyres and ").concat(this.doors, " doors.");
    };
    return Car;
}());
//instance of class
var benz = new Car("Benz", "c-300", 4, 4);
console.log(benz.getString());
//# sourceMappingURL=basics.js.map