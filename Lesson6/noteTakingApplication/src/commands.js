const args = process.argv;
const db = require('./db');
switch (args[2]) {
  case 'new':
    // console.log('We got a new request');
    try {
      db.insert(args[3]);
    } catch (err) {
      console.error(err.message);
    }
    break;
  case 'get':
    // console.log('We goxt a get request');
    db.getData().then((data) => console.log(data.toString()));
    break;
  default:
    console.log('Incorrect request argument');
    break;
}
