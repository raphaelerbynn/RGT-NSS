//method decorators
function logMethod(target: Object, propertyKey: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]){
        console.log(`Calling ${propertyKey} with args: ${JSON.stringify(args)}`);
        
        const result = originalMethod.apply(this, args);

        console.log(`Result: ${JSON.stringify(result)}`);
        return result;
    };
    return descriptor;
}

//interface
interface Person{
    f_name: string;
    l_name: string; 
    age: number;
    school: string,
    getFullName(): string;
}

//implementing the interface in a class
class Teacher implements Person{
    f_name: string;
    l_name: string;
    age: number;
    school: string;

    constructor (f_name: string, l_name: string, age: number, school: string){
        this.f_name = f_name;
        this.l_name = l_name;
        this.age = age;
        this.school = school;
    }

    getFullName(): string {
        return `Full name: ${this.f_name} ${this.l_name}`;
    }

    @logMethod
    getSchool(): string {
        return `Teaches at ${this.school}`;
    }

    @logMethod
    greetings(time: string): string {
        return `${this.f_name} says Good ${time}`;
    }
}


let teacherKwam: Teacher = new Teacher("Kwame", "Annan", 35, "Adakwaa JHS");
console.log(teacherKwam.getFullName());
console.log(teacherKwam.getSchool());
teacherKwam.greetings("afternoon");


