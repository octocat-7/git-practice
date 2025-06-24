// Conditional Statements
// If Statement

let age = 25;

if (age >= 18) {
    console.log("you can vote");
}

if (age < 18) {
    console.log("you cannot vote");
}


let mode = "dark";
let color;

if (mode === "dark") {
    color = "black";
}

if (mode === "light") {
    color = "white";
}

console.log(color);

// -------------------------------------------------
// If-else Statement

let mode = "light";
let color;

if (mode === "dark") {
    color = "black";
}
else {
    color = "white";
}

console.log(color);


let age = 25;

if (age >= 18) {
    console.log("vote");
}
else {
    console.log("not vote");
}

// Odd or Even
let num = 10;

if (num % 2 === 0) {
    console.log(num, "is even");
}
else {
    console.log(num, "is odd");
}

// -------------------------------------------------
// If-else Statement

let mode = "dark";
let color;

if (mode === "dark") {
    color = "black";
}
else if (mode === "blue") {
    color = "blue";
}
else if (mode === "pink") {
    color = "pink";
}
else {
    color = "white";
}

console.log(color);

// -------------------------------------------------
// Switch Statement

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number");
}