console.log("This is my first JS Code"); // console log is used to print
console.log("Rupesh Kumar");
console.log("Im learning JavaScript");

fullName = "Rupesh Kumar"; 
age = 25;
price = 99.99;
radius = 14;
a = null;
y = undefined;
isFollow = true;
console.log(isFollow);

fullname = "Rupesh Kumar"; // variable names are case sensitive, we can write it in uppercase or in lowercase
FullName = "Charan"; // variable names are case sensitive, we can write it in uppercase or in lowercase
console.log(FullName);

// full name = "Rupesh Kumar"; // should not give space
fullname = "Rupesh Kumar"; // we can write it in letters
fullname123 = "Rupesh Kumar"; // we can write it in numbers
fullname_ = "Rupesh Kumar"; // we can write it in underscore
fullname$ = "Rupesh Kumar"; // we can write it in dollar sign
console.log(fullname123);

// 12fullname = "Apple"; // should not write numbers first
name = "banana"; // we can write letters first
_thing = "table"; // we can write underscore first
$place = "hyderabad"; // we can write dollar sign first
console.log(name);

// reserved words cannot be variable name
console.log("https://www.w3schools.com/js/js_reserved.asp");

// ---------------------------------------------------------------------------

// var, let & const
var a = "Alice"; // the var keyword will change the value and takes the latest declared value
var a = "Bob"; // ✅ Re-declaration is allowed
a = "Charlie"; // ✅ Updating is allowed
console.log(a); // Output: Charlie

if (true) {
    var age = 25;
}
console.log(age); // Output: 25 (accessible outside the block)

// ----------------------------------------------------------------------------

let city = "New York"; // we cannot re-declare the value, but can be updated
// let city = "Boston"; ❌ Error: Identifier 'city' has already been declared
city = "Chicago"; // ✅ Updating is allowed
console.log(city); // Output: Chicago

if (true) {
    let temperature = 30;
    console.log(temperature); // Output: 30
}
// console.log(temperature); ❌ Error: temperature is not defined

// ----------------------------------------------------------------------------

const PI = 3.14; // we cannot re-declare the value or update the value
// PI = 3.1415; ❌ Error: Assignment to constant variable
// const PI = 3.1416; ❌ Error: Identifier 'PI' has already been declared
console.log(PI); // Output: 3.14

const user = {
    name: "John"
};
user.name = "Doe"; // ✅ Object properties can be modified
console.log(user.name); // Output: Doe
// user = {}; ❌ Error: Assignment to constant variable