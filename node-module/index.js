// const fs = require('fs');
// fs.writeFileSync('index.txt', 'this is my first note.');

// const fullname = require('./custom'); 

// console.log(fullname);

// const sum = require('./custom');
// console.log(sum(1,2));

// const operation = require('./custom');

// console.log(operation.add(1,2));
// console.log(operation.sub(4,3));

//es6

const {add, sub } = require('./custom');

console.log(add(1,2));
console.log(sub(5,3));