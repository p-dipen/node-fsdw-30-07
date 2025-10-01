const myPublicFn = function (req, res) {
  res.render('public', { title: 'Dipen Parihar' });
};

const myPublicFn2 = function (req, res) {
  res.render('public', { title: 'Extresssssss' });
};
module.exports = {
  myPublicFn,
  myPublicFn2,
};
