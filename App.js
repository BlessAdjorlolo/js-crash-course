// Declaring a variable
// Keyword identifier/VariableName = value
var firstName = "Bless";
let lastName = "Eyako";
let age = 22
let isMarriage = true;
let children = ["Junior", "Nana", "Yaa Babe"];
let other = {
    favoriteColor: "peru",
    favoriteSport: "Soccer",
    Favoritefruit: "Pineapple"
}
const fullName = firstName + " " + lastName; // concatenation
const myself = `My name is ${firstName} ${lastName}`; // string concatenation
console.log(myself);


// // STRING
// let sentence ="This tells a story of a young enthusiast in the field of software development"
// console.log(sentence.length);
// console.log(sentence.split("enthusiast"));
// console.log(sentence.replace("enthusiast", "self-motivated"));
// console.log(sentence.toLowerCase());
// console.log(sentence.toUpperCase());
// console.log(sentence.startsWith("Th"));
// console.log(sentence.endsWith("Sport"));
// console.log(sentence.includes("in"));

// // ARRAY
// let days = ["Monday", "Tuesday", "Wednesday", "Thursday"];
// console.log(days.length);
// console.log(sentence.toUpperCase());
// days.push("Friday");
// console.log(days);
// console.log(days.pop());
// days.unshift("Sunday");
// console.log(days);
// console.log(days.shift());
// console.log(days.indexOf("Friday"));
// console.log(days[5]); // retrieving data
// days[0] = "Sunday" // change data in array
// console.log(days)


// OBJECT
let person = {
    firstName: "Bless",
    lastName: "Eyako",
    age: 22
};
console.log(person["firstName"]);
console.log(person.firstName);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.enteries(person));

