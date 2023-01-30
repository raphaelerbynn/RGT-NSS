"use strict";
// variables with type
let fname = "Dora";
// let age: number = 8;
let isWorker = false;
let age = "8";
// array with type------------------------------
let schools = ["knust", "ucc", "legon"];
//tuple-----------------------------------------
let worker = ["John", 55];
//enum-------------------------------------------
var weekDays;
(function (weekDays) {
    weekDays[weekDays["Monday"] = 0] = "Monday";
    weekDays[weekDays["Tuesday"] = 1] = "Tuesday";
    weekDays[weekDays["Wednesday"] = 2] = "Wednesday";
    weekDays[weekDays["Thursday"] = 3] = "Thursday";
    weekDays[weekDays["Friday"] = 4] = "Friday";
})(weekDays || (weekDays = {}));
//function----------------------------------------
function add(num1, num2) {
    return age + num2;
}
//generics---------------------------------------
function identity(val) {
    return val;
}
class GenericNum {
}
let genericNum = new GenericNum();
genericNum.add = (a, b) => a + b;
console.log(genericNum.add("hello, ", "Mike"));
let lengthIdentity = (args) => {
    console.log(args.length);
    return args;
};
console.log(lengthIdentity("Ebo Ray"));
