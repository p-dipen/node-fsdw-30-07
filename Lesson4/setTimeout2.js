// Q1: What is happening when we create a new Promise here?
const task = new Promise(function (resolve, reject) {
  // Q2: What does setTimeout do in this Promise?
  setTimeout(() => {
    // Q3: What happens when resolve is called?
    resolve('Learning Promises');
  }, 200);
});

// Q4: What does .then do in a Promise chain?
task
  .then(function (msg) {
    console.log('Step 1:', msg);
    // Q5: Why are we returning a new value here?
    return msg + ' with .then chaining';
  })
  .then(function (updatedMsg) {
    console.log('Step 2:', updatedMsg);
    // Q6: What happens when we throw an error here?
    throw new Error('Something went wrong in Step 2');
  })
  .catch(function (err) {
    // Q7: How does .catch handle errors in the chain?
    console.log('Step 3: Error caught →', err.message);
    // Q8: Why are we returning a value here after an error?
    return 'Recovered from error';
  })
  .then(function (finalMsg) {
    console.log('Step 4:', finalMsg);
    // Q9: What will happen if isAI = true?
    const isAI = true;
    if (isAI) {
      console.log('I am using AI');
    }
  });

/* Output : -  */
