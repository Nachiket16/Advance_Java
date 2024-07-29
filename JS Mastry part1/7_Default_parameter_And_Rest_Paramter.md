# JavaScript Default Parameters

Default parameters allow you to set default values for function parameters if no argument is passed or if the argument is `undefined`.

## Basic Syntax

```javascript
function functionName(parameter1 = defaultValue1, parameter2 = defaultValue2) {
  // function body
}
```

## Examples

### Example 1: Simple Default Parameter

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!
```

### Example 2: Multiple Default Parameters

```javascript
function createUser(username = "anonymous", age = 0, isPremium = false) {
  return {
    username,
    age,
    isPremium
  };
}

console.log(createUser()); // Output: { username: "anonymous", age: 0, isPremium: false }
console.log(createUser("john_doe", 25)); // Output: { username: "john_doe", age: 25, isPremium: false }
console.log(createUser("jane_smith", 30, true)); // Output: { username: "jane_smith", age: 30, isPremium: true }
```

### Example 3: Using Expressions as Default Values

```javascript
function calculateArea(length, width = length) {
  return length * width;
}

console.log(calculateArea(5)); // Output: 25 (5 * 5)
console.log(calculateArea(6, 4)); // Output: 24 (6 * 4)
```

## Key Points

1. Default parameters are only used when the argument is `undefined` or not provided.
2. You can use any valid expression as a default value, including function calls or previous parameters.
3. Default parameters work with arrow functions as well.
4. They help make your functions more flexible and reduce the need for manual checks inside the function body.



I've created a Markdown file with notes and code examples for JavaScript default parameters. The file includes:

1. A brief introduction to default parameters
2. The basic syntax
3. Three practical examples demonstrating different aspects of default parameters
4. Key points to remember

Would you like me to explain any part of the content in more detail or add any specific information to the document?
```JS

function addTwo(a,b){
//Previous approach for the default value 
    if(typeOf b==="undefined"){
        b=0;
    }
    return a+b;
}

function addTwo(a,b=0){
    return a*b;
}

console.log(addTwo(4,5));

```


Certainly! I'll create a concise Markdown file with important points and examples for JavaScript rest parameters. This will be easy to understand and perfect for quick revision.





# JavaScript Rest Parameters

Rest parameters allow you to represent an indefinite number of arguments as an array in a function.

## Key Points

1. Rest parameters are denoted by three dots (`...`) followed by the parameter name.
2. They must be the last parameter in a function definition.
3. The rest parameter becomes an array containing all remaining arguments.
4. You can use array methods on the rest parameter.
5. Rest parameters solve the problem of using the `arguments` object, which is array-like but not a real array.

## Syntax

```javascript
function functionName(...restParam) {
  // function body
}
```

## Examples

### Example 1: Basic Usage

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(5, 10, 15, 20)); // Output: 50
```

### Example 2: Combining Regular and Rest Parameters

```javascript
function greetPeople(greeting, ...names) {
  names.forEach(name => console.log(`${greeting}, ${name}!`));
}

greetPeople("Hello", "Alice", "Bob", "Charlie");
// Output:
// Hello, Alice!
// Hello, Bob!
// Hello, Charlie!
```

### Example 3: Using Array Methods with Rest Parameters

```javascript
function findMax(...numbers) {
  return Math.max(...numbers);
}

console.log(findMax(10, 5, 30, 15)); // Output: 30
```

## Quick Revision Points

- Rest parameters collect all remaining arguments into an array.
- They allow functions to accept any number of arguments.
- Rest parameters make it easier to work with variable-length argument lists.
- They provide a cleaner alternative to using the `arguments` object.
- You can apply array methods directly to rest parameters.

