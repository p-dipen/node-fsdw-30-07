function divide(a, b) {
  // 10/0 is not zero it is

  if (b == 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}
try {
  divide(10, 0);
} catch (err) {
  console.error(err);
}
