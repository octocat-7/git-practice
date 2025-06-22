// Primitive Data Types
let age = 25;
let price = 100.5; //Number in Datatypes

let fullName = "Rupesh Kumar"; //String in Datatypes

isFollow = true; //Boolean in Datatypes

let a; //Undefined in Datatypes

let b = null; //Null in Datatypes

let x = BigInt("164"); //BigInt in Datatypes

let y = Symbol("Hello!"); //Symbol in Datatypes

// -----------------------------------------------

// Non-Primitive Data Types (Objects)
const student = {
    fullName: "Rupesh Kumar",
    age: 25,
    cgpa: 8.6,
    isPass: true,
};

student["fullName"] = "Charan" //Replacing the name
student["age"] = student["age"] + 1; //Adding one more number into the age value

console.log(student["fullName"]);
console.log(student["age"]);
console.log(student.age);