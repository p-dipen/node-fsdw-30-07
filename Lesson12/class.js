// obj = {
//     "Property": "value",
//     "method": function () {}
// }

// if you want to make a object which can reuse with different method
// `this` keyword is reference to the block scope

class CreateStudentInstance {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  getDetails() {
    return `${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }

  isAdult() {
    return this.age >= 18;
  }
}
// Use new (Constructor function way)
const student1 = new CreateStudentInstance('Alice', 17, '11th');
const student2 = new CreateStudentInstance('Bob', 19, 'college');
const student3 = new CreateStudentInstance('Cab', 23, '10th');

console.log(student1.getDetails());
console.log(student2.getDetails());
console.log(student3.getDetails());
