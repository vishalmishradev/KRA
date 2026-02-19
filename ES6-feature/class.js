
class Person {
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log("Hellow my name is:", this.name);
    }
}

const p1 =  new Person("Vishal", 27);
p1.greet();