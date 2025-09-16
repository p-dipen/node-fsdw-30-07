const answer = new Promise(function (resolve, reject) {
  // Async process
  setTimeout(() => {
    // It is going to reject my promise
    reject('Data');
  }, 250);
});

// Prmoise get trigger
answer
  // The catch will going to cATCH the rejected promise
  .catch(function (error) {
    // I am returning this out as data to next available .then
    return `Error from then` + error + ' This is comming from catch';
  })
  .then(function (data) {
    console.log('This is then');
    console.log(data);
    // Custom creating an error
    throw new Error('This is coming form then');
  })
  .catch(function (err) {
    console.log('Error from second catch', err);
  })
  .then(function (data) {
    console.log('Final then');
  });

/* Output 
    This is then
    Error from then Data This is coming from catch
    Error from second catch: Error: This is coming from then
    Final then
  
  */
