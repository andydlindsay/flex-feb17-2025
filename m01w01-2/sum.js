// Write a program that takes in an unlimited number of command line arguments and prints out the sum of them. If any argument is not a whole number, skip it. Do not support negative numbers.

// read command line arguments
// console.log(process.argv);

const args = process.argv;

// console.log(args);

// how to remove the first two elements of the array

// args.shift(); // remove the first element
// args.shift();

// args.splice(0, 2); // remove the first two elements of the array

const newArr = args.slice(2);

// console.log(newArr);

// console.log(args);

// const data = [ '10', '15', '20', '4.5', '-100' ];

let total = 0;

for (const value of args) {
  // convert the value to a number
  const converted = Number(value); // convert the string to a number
  
  if (Number.isInteger(converted) && converted > 0 === false) {
    total += converted;
  }
}

console.log('total', total); // 45

// how do we loop through an array?
// c-style loop
// for (let i = 0; i < data.length; i++) {
//   const value = data[i]; // data.at(i)
//   console.log('value', value);
// }

// for..in looping through the indexes (indices)
// for (const index in data) {
//   const value = data[index];
//   console.log('value', value);
// }

// for..of accessing the values
// for (const value of data) {
//   console.log('value', value);
// }
