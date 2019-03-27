/* eslint-disable */

// Problem 91
//
// This problem was asked by Dropbox.
//
// What does the below code snippet print out? How can we fix the anonymous functions to behave as we'd expect?
//
// const functions = [];
// for (var i = 0; i < 10; i++) {
//   functions.push(() => i);
// }

// functions.forEach(f => console.log(f()));
//
// It prints out 10 10 times. This is not proper closure, and failing to capture what i is at each iteration.
// i is a var, which means it is function scoped, so it is a global variable.

const functions = [];
// use let to make i blocked scoped, which captured i in each iteration.
for (let i = 0; i < 10; i++) {
  functions.push(() => i);
}

// use an IIFE, which has it's own scope
for (var i = 0; i < 10; i++) {
  (j => {
    functions.push(() => j);
  })(i);
}

functions.forEach(f => console.log(f()));
