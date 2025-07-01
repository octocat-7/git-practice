// "for" loop
// Print 1 to 5
for (let count=1; count<=5; count++) {
    console.log("rupesh kumar"); //5 times executes
}

// Calculate sum of 1 to 5
let sum = 0;
for (let i=1; i<=5; i++) {
   sum = sum + i; //15 is the output
}
console.log("sum =", sum); //output of sum
console.log("loop has ended"); //this message will send when the loop ends

Print 1 to 5
for (let i=1; i<=5; i++) {
    console.log("i = ", i); //5 times executes
}

// "while" loop
let i = 2;
while (i <= 10) {
    console.log("i =", i);
    i++;
}

// "do while"
let i = 1;
do {
    console.log("i=", i);
    i++;
} while (i <= 10);

// "for-of" loop
let str = "RupeshKumar";

let rupesh = 0;
for (let i of str) { //iterator -> characters
    console.log("i= ",i);
    rupesh++;
}

console.log("string size = ", rupesh);

// "for-in" loop
let student = {
    fullName: "Rupesh Kumar",
    age: 25,
    cgpa: 8.5,
    isPass: true,
};

for (let key in student) {
    console.log("key=", key, "value=", student[key]);
}