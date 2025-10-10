// ===================================================================
//  JavaScript Basics
// ===================================================================

// Use console.log() to print messages to the console.
console.log("Hello, World! Let's learn some JavaScript.");

// -------------------------------------------------------------------
// 1. VARIABLE DECLARATION
// -------------------------------------------------------------------
// Variables are like containers for storing data values.

// 'let' is used for variables whose value can change.
let age = 25;
console.log("Initial age:", age); // Output: Initial age: 25
age = 26; // The value can be updated.
console.log("Updated age:", age); // Output: Updated age: 26

// 'const' is used for constants, whose value cannot be changed once assigned.
const birthYear = 1999;
console.log("Birth Year:", birthYear); // Output: Birth Year: 1999
// birthYear = 2000; // This line would cause an error! Uncomment to see.

// 'var' is an older way to declare variables. It's generally better to use 'let' and 'const'.
var score = 100;
console.log("Player score:", score); // Output: Player score: 100

console.log("\n--- End of Variable Declaration ---\n");


// -------------------------------------------------------------------
// 2. DATA TYPES
// -------------------------------------------------------------------
// JavaScript has several built-in data types.

// String: Textual data, enclosed in quotes.
const name = "Alice";
console.log("Name (String):", name);

// Number: Integers or floating-point numbers.
let accountBalance = 150.75;
console.log("Balance (Number):", accountBalance);

// Boolean: Represents true or false.
let isActive = true;
console.log("Is Active? (Boolean):", isActive);

// Array: An ordered list of values.
const fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits (Array):", fruits);
console.log("First fruit:", fruits[0]); // Access elements by index (starts at 0)

// Object: A collection of key-value pairs.
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};
console.log("Person (Object):", person);
console.log("Person's first name:", person.firstName); // Access properties with dot notation

// Null: Represents the intentional absence of any object value.
let car = null;
console.log("Car (Null):", car);

// Undefined: A variable that has been declared but not assigned a value.
let city;
console.log("City (Undefined):", city);

console.log("\n--- End of Data Types ---\n");


// -------------------------------------------------------------------
// 3. ARITHMETIC OPERATORS
// -------------------------------------------------------------------
// Used to perform mathematical calculations.

let a = 10;
let b = 5;

console.log("a + b =", a + b); // Addition: 15
console.log("a - b =", a - b); // Subtraction: 5
console.log("a * b =", a * b); // Multiplication: 50
console.log("a / b =", a / b); // Division: 2
console.log("a % b =", a % b); // Modulus (remainder of division): 0

// Increment and Decrement
a++; // a = a + 1
console.log("a after increment:", a); // 11
b--; // b = b - 1
console.log("b after decrement:", b); // 4

console.log("\n--- End of Arithmetic Operators ---\n");


// -------------------------------------------------------------------
// 4. LOGICAL OPERATORS
// -------------------------------------------------------------------
// Used to combine or invert boolean values.

let isSunny = true;
let isWarm = false;

// AND (&&): Both conditions must be true.
console.log("Is it a good day for the beach? (isSunny && isWarm):", isSunny && isWarm); // false

// OR (||): At least one condition must be true.
console.log("Can I go out? (isSunny || isWarm):", isSunny || isWarm); // true

// NOT (!): Inverts the boolean value.
console.log("Is it NOT sunny? (!isSunny):", !isSunny); // false

console.log("\n--- End of Logical Operators ---\n");


// -------------------------------------------------------------------
// 5. CONTROL FLOW STATEMENTS
// -------------------------------------------------------------------
// Used to make decisions in your code.

// if, else if, else
let temperature = 22;

if (temperature > 30) {
  console.log("It's a hot day!");
} else if (temperature > 20) {
  console.log("It's a pleasant day."); // This block will run.
} else {
  console.log("It's a cold day.");
}

// switch statement (an alternative to long if-else chains)
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Time to start the week!");
    break; // 'break' exits the switch
  case "Friday":
    console.log("Weekend is almost here!");
    break;
  default: // 'default' runs if no case matches
    console.log("It's a regular day.");
}

console.log("\n--- End of Control Flow ---\n");


// -------------------------------------------------------------------
// 6. LOOPS
// -------------------------------------------------------------------
// Used to repeat a block of code multiple times.

// for loop: Repeats a specific number of times.
console.log("Starting for loop...");
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

// Output will be:
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Count: 5

// while loop: Repeats as long as a condition is true.
console.log("\nStarting while loop...");
let countdown = 3;
while (countdown > 0) {
  console.log("Countdown:", countdown);
  countdown--; // This is important to avoid an infinite loop!
}
console.log("Start!");

// Output will be:
// Countdown: 3
// Countdown: 2
// Countdown: 1
// Start!

console.log("\n--- End of Loops ---");