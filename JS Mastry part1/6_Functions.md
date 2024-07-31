# JavaScript Function Concepts

## 1. Functions

Functions are reusable blocks of code that perform a specific task or calculate a value.

### Key Points:
- Functions can be declared using function declarations or function expressions.
- They can accept parameters and return values.
- Functions in JavaScript are first-class objects.

### Example:

```javascript
// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function Expression
const sayGoodbye = function(name) {
  return `Goodbye, ${name}!`;
};

console.log(greet("Alice")); // Output: Hello, Alice!
console.log(sayGoodbye("Bob")); // Output: Goodbye, Bob!
```

## 2. Hoisting

Hoisting is JavaScript's default behavior of moving declarations to the top of their scope.

### Key Points:
- Function declarations are hoisted completely.
- Variable declarations are hoisted, but not their initializations.
- Let and const declarations are hoisted but not initialized (Temporal Dead Zone).

### Example:

```javascript
console.log(hoistedFunction()); // Output: "I am hoisted!"

function hoistedFunction() {
  return "I am hoisted!";
}

console.log(x); // Output: undefined
var x = 5;

// console.log(y); // This would cause a ReferenceError
let y = 10;
```

## 3. Nested Functions

Nested functions are functions defined inside other functions.

### Key Points:
- Inner functions have access to variables in their outer scope.
- They help in creating private variables and functions.
- Useful for organizing code and creating closures.

### Example:

```javascript
function outerFunction(x) {
  function innerFunction(y) {
    return x + y;
  }
  return innerFunction;
}

const addFive = outerFunction(5);
console.log(addFive(3)); // Output: 8
console.log(addFive(7)); // Output: 12
```

## 4. Functions Returning Functions

A function can return another function, which is a powerful feature for creating specialized functions.

### Key Points:
- Allows for function composition and currying.
- Useful for creating higher-order functions.
- Enables the creation of closures.

### Example:

```javascript
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
```

## Quick Revision Points

1. Functions are reusable code blocks that can accept parameters and return values.
2. Function declarations are hoisted, while function expressions are not.
3. Nested functions have access to their outer function's scope.
4. Functions can return other functions, allowing for powerful programming patterns.
5. Hoisting moves declarations to the top of their scope, but initializations stay in place.
6. Nested functions and functions returning functions are key to creating closures.
7. Understanding these concepts is crucial for writing efficient and organized JavaScript code.