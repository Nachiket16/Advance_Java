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