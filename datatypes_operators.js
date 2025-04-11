// Exercise 1: Data Types
let myString = "Hello, JavaScript!";
let myNumber = 2025;
let myBoolean = false;
let myNull = null;
let myUndefined;

console.log(typeof myString);     // string
console.log(typeof myNumber);     // number
console.log(typeof myBoolean);    // boolean
console.log(typeof myNull);       // object (known quirk in JS)
console.log(typeof myUndefined);  // undefined
// Exercise 2: Operators
let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

// Exercise 3: Comparison and Logical Operators
let isGreater = a > b;
let isEqual = a === b;
let isNotEqual = a !== b;
console.log("a > b:", isGreater);
console.log("a === b:", isEqual);
console.log("a !== b:", isNotEqual);

let logicalAnd = (a > 5) && (b < 5);
let logicalOr = (a < 5) || (b < 5);
let logicalNot = !(a < b);

console.log("Logical AND:", logicalAnd);
console.log("Logical OR:", logicalOr);
console.log("Logical NOT:", logicalNot);