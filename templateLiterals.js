// Template literals (also known as template strings) are a feature in JavaScript that allows for string interpolation, multi-line strings, and embedding expressions in a more readable and flexible way. They were introduced in ES6 (ECMAScript 2015).

// Template literals are enclosed by backticks ( ) instead of single (' ') or double (" ") quotes.
const message = `Hello, World!`;
console.log(message); // Output: Hello, World!

// 1. String Interpolation (Variable Substitution)
// You can embed variables and expressions inside a string using ${} (placeholder syntax)
const name = "John";
const age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);
// Output: My name is John and I am 25 years old.