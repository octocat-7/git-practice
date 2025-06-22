// Q1. Create a const object called "product" to store information shown in the picture(a product in amazon).
// Storing 4 info in the const object (name, rating, offer, price)

const product = {
    productName: "Ball Pen",
    rating: 4,
    offer: 5,
    price: 270,
};

product["productName"] = "Black Pen"; //Replacing the name
product["rating"] = product["rating"] - 1; //Removing one number from the rating value

console.log(product["productName"]);
console.log(product.rating);

// ---------------------------------------------------------------------------------------

// Q2. Create a const object called "profile" to store information shown in the picture(a insta profile).
// Storing 4 info in the const object (username, isFollow, following, followers)

const profile ={
    username: "@rupesh",
    isFollow: true,
    following: 500,
    followers: 800,
}

profile["username"] = "@by_rupesh"; //Replacing the name
profile["following"] = profile["following"] + 30; //Adding following count to the following value
profile.isFollow = false; //Replacing the condition

console.log(profile["username"]);
console.log(typeof profile["username"]);
console.log(profile.following);
console.log(profile.isFollow);