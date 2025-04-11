// Exercise 1: Temperature check (if-else)
let temperature = 18;

if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}

// Rewriting using switch (using a range workaround)
switch (true) {
    case (temperature < 0):
        console.log("It's freezing! (switch)");
        break;
    case (temperature >= 0 && temperature <= 15):
        console.log("It's cold. (switch)");
        break;
    case (temperature >= 16 && temperature <= 25):
        console.log("It's mild. (switch)");
        break;
    default:
        console.log("It's warm. (switch)");
}

// Exercise 2: Divisibility Check (if-else)
let number = 6;

if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

// Rewriting using switch
switch (true) {
    case (number % 2 === 0 && number % 3 === 0):
        console.log("Divisible by both. (switch)");
        break;
    case (number % 2 === 0):
        console.log("Divisible by 2. (switch)");
        break;
    case (number % 3 === 0):
        console.log("Divisible by 3. (switch)");
        break;
    default:
        console.log("Not divisible by 2 or 3. (switch)");
}

// Exercise 3: For Loops
console.log("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Even numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) console.log(i);
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum from 1 to 100:", sum);

const numbers = [1, 2, 3, 4, 5];
console.log("Each number in array:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

const nums = [3, 7, 2, 5, 10, 6];
let max = nums[0];
for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
        max = nums[i];
    }
}
console.log("Largest number is:", max);
// Exercise 4: While Loops

console.log("While loop: Numbers from 1 to 10");
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

console.log("While loop: Even numbers from 1 to 20");
let j = 1;
while (j <= 20) {
    if (j % 2 === 0) {
        console.log(j);
    }
    j++;
}

console.log("While loop: Sum from 1 to 100");
let k = 1;
let sumWhile = 0;
while (k <= 100) {
    sumWhile += k;
    k++;
}
console.log("Sum is:", sumWhile);

console.log("While loop: Multiples of 5 less than 50");
let m = 1;
while (m < 50) {
    if (m % 5 === 0) {
        console.log(m);
    }
    m++;
}
// Exercise 5: Do-While Loops

console.log("Do-while: Numbers from 1 to 10");
let n = 1;
do {
    console.log(n);
    n++;
} while (n <= 10);

console.log("Do-while: Sum from 1 to 100");
let x = 1;
let sumDo = 0;
do {
    sumDo += x;
    x++;
} while (x <= 100);
console.log("Sum is:", sumDo);

// Prompt user until number > 10
// You can only run this part in the browser using prompt()

// Example structure for browser:
let input;
do {
    input = 11; // Replace with `prompt("Enter a number greater than 10:")` when testing in browser
    console.log("Entered:", input);
} while (input <= 10);

// Simple guessing game (browser only)
let secretNumber = 7;
let guess;
do {
    guess = 7; // Replace with `prompt("Guess a number between 1 and 10:")` in browser
    console.log("You guessed:", guess);
} while (guess != secretNumber);

console.log("You got it!");