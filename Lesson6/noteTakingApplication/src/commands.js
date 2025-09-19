const args = process.argv;
const db = require('./db');
switch (args[2]) {
  // Create a new note
  case 'new':
    // console.log('We got a new request');
    try {
      db.insert(args[3]);
    } catch (err) {
      console.error(err.message);
    }
    break;
  // get notes
  case 'get':
    // console.log('We goxt a get request');
    // console.log(args);
    db.getData().then((data) => {
      if (args[3] && RegExp(/^\d+$/).test(args[3])) {
        let index = parseInt(args[3]) - 1;
        let jsonData = JSON.parse(data.toString());
        if (index > -1 && index < jsonData.notes.length) {
          console.log(jsonData.notes[index]);
        } else {
          console.error('Please select proper note');
        }
      } else {
        console.log(data.toString());
      }
    });
    break;
  // Update a particular note
  case 'update':
    db.getData().then((data) => {
      console.log(args);
      console.log(parseInt(args[3]));
      if (args[3] && RegExp(/^\d+$/).test(args[3])) {
        let index = parseInt(args[3]) - 1;
        let jsonData = JSON.parse(data.toString());
        if (index > -1 && index < jsonData.notes.length) {
          jsonData.notes[index] = args[4];
          db.saveDB(jsonData);
          console.log('Date is saved');
        } else {
          console.error('Please select proper note');
        }
      } else {
        console.error('Please select a proper note for update');
      }
    });
    break;
  default:
    console.log('Incorrect request argument');
    break;
}
