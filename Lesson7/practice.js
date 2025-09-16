// var obj = { first: 'Dipen', last: 'Parihar' };
// console.log(obj);
// // alias
// var { first: f, last: l } = obj;

// console.log(f, l);

// var arr = ['start', 'end'];
// console.log(arr[0], arr[1]);
// // Basic array destructuring
// var [s, e] = arr;

// console.log(s, e);

function greeting({ name: firstName, age = 'unknown', ...rest }) {
  console.log(
    `${firstName} your current age is ${age} ${JSON.stringify(rest)}`,
  );
}

greeting({ name: 'dipen' });
greeting({ name: 'dipen', age: 45, gender: 'M' });
