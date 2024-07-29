### Functions
- Function are set of statement to execute the task

```JS
//Function Declaration
function singHappyBirthday(){
    console.log("happy birthday to you....")
}
singleHappyBirthday();
//Function Expression
const birthdayFunction = function (){
    console.log("happy birthday to you....")
}
birthdayFunction();
//Arrow function
const birthday = () =>{
    console.log("Happy birthday arrow function")
}

birthday();

```
### Hoisting 

- In JS if function is declared manner, It can be called from anywhere in the program
- But if function is in expressed manner it will give you an error this is called as hoisting
```JS
hello() //This is allowed
function hello(){
    console.log("hello");
}

hi();   //before expressed if function is called it give u error
const hi = function(){
    console.log("hi")
}

```

# Function inside function

```JS
const app = () => {
    const myFunc = () =>{
        console.log("hello from myFunc")
    }

    const addTwo = (num1, num2) => {
        return num1+num2;
    }
    const mulTwo = (num1, num2) => num1*num2;

    cosole.log("inside app")
    myFunc();
}
app();
// This will only run app and give: inside app
// If we call myFunc() inside the app() then : inside app \n hello from myFunc
```

# Block scope vs Function scope

- Let & const are block scope
- var is function scope

``` JS
{
    let firstName = "nachiket";
    var lastName = "khule";

}
console.log(firstName); //Error: Uncaught referenceError
console.log(lastName); //khule : no error
```