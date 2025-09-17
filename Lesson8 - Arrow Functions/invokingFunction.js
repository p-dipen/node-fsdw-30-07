const personTemplate = {
  fullName: function () {
    console.log('Inside fullName function : ', this);
    console.log(this.firstName + ' ' + this.lastName);
  },
};

// console.log('FullName: ', personTemplate.fullName());

const person1 = {
  firstName: 'John',
  lastName: 'Doe',
};

const person2 = {
  firstName: 'Mary',
  lastName: 'Smith',
  age: 25,
  status: 'unmarried',
  color: 'red',
  foodChoice: 'rice',
};

// personTemplate.fullName.call(person2);
// personTemplate.fullName.call(person1);

function sumArgument() {
  const args = Array.prototype.slice.call(arguments);
  return args.reduce((acc, val) => acc + val, 0);
}

console.log(sumArgument(1, 2));
console.log(sumArgument(1, 2, 4));
console.log(sumArgument(5, 5));
