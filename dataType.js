// JavaScript provides different data types to hold different types of values. 

// There are two types of data types in JavaScript.

// 1.Primitive data type
// 2.Non-primitive (reference) data type

let age = 30; // Number
let name = "Alice"; // String
let isStudent = false; // Boolean
let address; // Undefined
let salary = null; // Null
let bigValue = 12345678901234567890n; // BigInt
let uniqueId = Symbol("id"); // Symbol

console.log(typeof age); // "number"
console.log(typeof name); // "string"
console.log(typeof isStudent); // "boolean"
console.log(typeof address); // "undefined"
console.log(typeof salary); // "object" (weird behavior in JS)
console.log(typeof bigValue); // "bigint"
console.log(typeof uniqueId); // "symbol"

let colors = ["red", "blue", "green"]; // Array
let person = { name: "John", age: 25 }; // Object
function sayHello() { console.log("Hello!"); } // Function

console.log(typeof colors); // "object"
console.log(typeof person); // "object"
console.log(typeof sayHello); // "function"