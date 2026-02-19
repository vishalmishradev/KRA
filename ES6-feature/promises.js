// A Promise in JavaScript is used to handle async operations like API calls, timers, file loading, etc.
// It has 3 states:

// Pending, fulfilled, rejected

let promise = new Promise(function(resolve, reject) {

  let success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }

});

promise
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.log(error);
  });
