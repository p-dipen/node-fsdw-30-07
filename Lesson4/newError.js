module.exports = function makeError(parameter) {
  if (parameter == undefined) {
    throw new Error('This function required single parameter');
  }
  return parameter;
};

//
