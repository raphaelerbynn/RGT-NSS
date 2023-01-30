"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//method decorators
function logMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling ${propertyKey} with args: ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args);
        console.log(`Result: ${JSON.stringify(result)}`);
        return result;
    };
    return descriptor;
}
//implementing the interface in a class
class Teacher {
    constructor(f_name, l_name, age, school) {
        this.f_name = f_name;
        this.l_name = l_name;
        this.age = age;
        this.school = school;
    }
    getFullName() {
        return `Full name: ${this.f_name} ${this.l_name}`;
    }
    getSchool() {
        return `Teaches at ${this.school}`;
    }
    greetings(time) {
        return `${this.f_name} says Good ${time}`;
    }
}
__decorate([
    logMethod
], Teacher.prototype, "getSchool", null);
__decorate([
    logMethod
], Teacher.prototype, "greetings", null);
let teacherKwam = new Teacher("Kwame", "Annan", 35, "Adakwaa JHS");
console.log(teacherKwam.getFullName());
console.log(teacherKwam.getSchool());
teacherKwam.greetings("afternoon");
