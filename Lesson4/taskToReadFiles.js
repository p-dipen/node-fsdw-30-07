let firstFileName = './Files/first.txt';

// You have to read the first file and take the second file name from firt file
// Read the second file and take third file name from it.
// go the third file
// Print the final message.

// Which library we are going to use ? - Internal built library

const fs = require('fs');
let secondFileName = '';
let thirdFileName = '';

// We call it CallBackHell
// Async function
fs.readFile(firstFileName, function (err, data) {
  console.log('This is inside firstFile cb :', firstFileName);

  if (err) {
    console.log('Error from firstFile:', err);
    return;
  }
  // Updating the secondFileName (Variable)
  secondFileName = data.toString();
  console.log('Ouptut from firstFile :', secondFileName);

  // Async function - Second function Started
  fs.readFile(secondFileName, function (err2, data2) {
    console.log('This is inside secondFile cb :', secondFileName);
    if (err2) {
      console.log('Error from secondFileName:', err2);
      return;
    }
    // Updating the thirdFileName (Variable)
    thirdFileName = data2.toString();
    console.log('Ouptut from secondFileName :', thirdFileName);

    // Async function - Third Function Started
    fs.readFile(thirdFileName, function (err3, data3) {
      console.log('This is inside thirdFile cb :', thirdFileName);
      if (err3) {
        console.log('Error from thirdFileName:', err3);
        return;
      }
      // Printing Final Message
      console.log('Ouptut from thirdFileName :', data3.toString());
      // Third Function Ended
    });
    // Second Function Ended
  });
  // First Function Ended
});
