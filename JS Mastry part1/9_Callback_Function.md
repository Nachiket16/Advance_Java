# JavaScript Callback Functions

A callback function is a function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of routine or action.

## Key Points

1. Callbacks are a fundamental concept in JavaScript, especially for handling asynchronous operations.
2. They allow you to execute code after a specific task has completed.
3. Callbacks can be anonymous functions or named functions.
4. They are commonly used in event handlers, array methods, and AJAX requests.
5. Callback hell can occur when multiple nested callbacks are used, leading to complex and hard-to-read code.

## Basic Syntax

```javascript
function doSomething(callback) {
  // Some operation
  callback();
}

function callbackFunction() {
  console.log("Callback function executed!");
}

doSomething(callbackFunction);
```

## Examples

### Example 1: Simple Callback

```javascript
function greet(name, callback) {
  console.log('Hello ' + name);
  callback();
}

function callMe() {
  console.log('I am callback function');
}

greet('John', callMe);
// Output:
// Hello John
// I am callback function
```

### Example 2: Callback with Array Methods

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number * 2);
});
// Output:
// 2
// 4
// 6
// 8
// 10
```

### Example 3: Asynchronous Callback

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: 'John Doe' };
    callback(data);
  }, 2000);
}

function processData(data) {
  console.log('Data received:', data);
}

console.log('Fetching data...');
fetchData(processData);
console.log('Continuing with other tasks...');

// Output:
// Fetching data...
// Continuing with other tasks...
// (after 2 seconds)
// Data received: { id: 1, name: 'John Doe' }
```

## Quick Revision Points

- Callbacks are functions passed as arguments to other functions.
- They are often used to continue code execution after an asynchronous operation.
- Callbacks can be used with array methods like forEach, map, filter, etc.
- They are crucial for event handling in JavaScript.
- Promises and async/await are modern alternatives to callbacks for handling asynchronous operations.
- Be cautious of callback hell - excessive nesting of callbacks can make code hard to read and maintain.
- Error handling in callbacks is typically done by passing the error as the first argument to the callback function.