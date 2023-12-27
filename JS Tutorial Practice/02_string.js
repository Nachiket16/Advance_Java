// String indexing

let firstName = "     Nachiket";

console.log(firstName.length)
console.log(firstName[1])

// String has few methods like
// trim() -> remove spaces from start and end of the body
// toUpperCase() -> convert each character of the string into the captial letter
// slice(start,end) -> Index start with 0 
// Strings are immutable so after using the method you should override or assign to new varible to store the changes


// firstName.trim();
// console.log(firstName);
// console.log(firstName.trim())
// console.log(firstName.slice(5,11));
// console.log(typeof(firstName));

let age = 18;
age = age+"";   // convert number to string
age = +age; // convert string to number
age = Number(age); // anoter way to convert the string to number by typecasting
console.log(typeof age);

let name = "Nachiket"

// One way to decalre the aboutme is like this 

let aboutMe = "my name is "+ name + " and my age is "+age;
console.log(aboutMe);
// But By using the template which are `` and $ with placeholder {} we can dynamically add the value 

aboutMe = `My name is ${name} and my age is ${age}`
console.log(aboutMe);