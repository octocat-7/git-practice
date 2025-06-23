// Arithmetic Operators (+, -, *, /)
let a = 5;
let b = 2;

console.log("a + ", a, "& b =", b); //Printing the values
console.log("a + b =", a + b); //Addition
console.log("a - b =", a - b); //Subtraction
console.log("a * b =", a * b); //Multiplication
console.log("a / b =", a / b); //Division
console.log("a % b =", a % b); //Modulus
console.log("a ** b =", a ** b); //Exponentiation (a^b)

let c = 5;
let d = 9;
let e = c + d;
console.log("c + d =", e);

// Unary Operators
let a = 5;
let b = 2;

console.log("a = ", a, "& b =", b);

a++; //Increment Operator
a--; //Decrement Operator

console.log("++a = ", ++a); //Pre-Increment (it will increase the value first and then print)
console.log("a++ = ", a++); //Post-Increment (it will print the value first and then increase)
console.log("--a = ", --a); //Pre-Decrement (it will decrease the value first and then print)
console.log("a-- = ", a--); //Post-Decrement (it will print the value first and then decrease)

console.log("a = ", a); //Printing increased value

// -----------------------------------------------------------------------------------------------------

// Assignment Operators (=, +=, -=, *=, /=, %=, **=)
let a = 5;
let b = 2;

a += 4; // a = a + 4
a -= 4; // a = a - 4
a *= 4; // a = a * 4
a /= 4; // a = a / 4
a %= 4; // a = a % 4
a **= 4; // a = a ** 4
console.log("a = ", a);

// -----------------------------------------------------------------------------------------------------

// Comparision Operators (==, !=, ===, !==, >, >=, <, <=) //boolean will be the output (true or false)
let a = 5; 
let b = 3; 

console.log("a == b", a == b); //Equal to
console.log("a != b", a != b); //Not equal to
console.log("a === b", a === b); //string vs number → types different 
console.log("a !== b", a !== b); //types are not equal
console.log("a > b", a > b); //Greater than
console.log("a < b", a < b); //Less than
console.log("a >= b", a >= b); //Greater than equal to
console.log("a <= b", a <= b); //Less than equal to

// -----------------------------------------------------------------------------------------------------

// Logical Operators (&&, ||, !) //boolean will be the output (true or false)
let a = 6; 
let b = 5; 

let cond1 = a > b; //true
let cond2 = a === 6; //true

console.log("cond1 && cond2 =", cond1 && cond2); //Logical AND Operator

console.log("cond1 || cond2", a < b || a === 6); //Logical OR Operator

console.log("!(6<5)", !(a < b)); //Logical NOT Operator
console.log("!(a === 6)", !(a === 6)); //Logical NOT Operator