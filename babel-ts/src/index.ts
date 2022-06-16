import {var1} from './module'

interface StudentIntf {
  name: string;
  age: number;
}

class Student implements StudentIntf {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  describe() {
    return `${this.name} is ${this.age} years old`;
  }
}

const student = new Student("John", 20);

console.log(student.describe());
console.log(var1);
