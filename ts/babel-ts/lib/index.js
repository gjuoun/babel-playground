import { var1 } from './module';

class Student {
  constructor(name, age) {
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