function singHappyBirthday(){
    console.log("happy birthday to you....")
}

function addition( a, b){
    return a+b;
}

function concat(s1, s2){
    return s1.concat(s2)
}

singHappyBirthday();

const add = addition(3,4);
console.log(add);

console.log(concat("Nachiket", "Khule"));

function isEven(number){
    return number%2===0;
}

console.log(isEven(8));

const birthday = () =>{
    console.log("Happy birthday arrow function")
}

birthday();

const birthdayFunction = function (){
    console.log("happy birthday Expression function....")
}
birthdayFunction();