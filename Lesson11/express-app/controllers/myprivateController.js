const myPrivateFn = function (req, res) {
  res.send('Hello world private');
};
const myPrivateSubmit = function (req, res) {
  res.send('Successfully submitted privately');
};

module.exports = {
  myPrivateFn,
  myPrivateSubmit,
};
