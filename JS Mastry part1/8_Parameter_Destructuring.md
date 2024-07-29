# JavaScript Parameter Destructuring

Parameter destructuring allows you to unpack values from arrays or properties from objects directly into function parameters.

## Key Points

1. It provides a concise way to extract multiple properties from an object or elements from an array.
2. You can use it with both object and array destructuring syntax.
3. It works with default values, making functions more flexible.
4. You can rename variables during destructuring.
5. It's particularly useful when working with configuration objects.

## Object Destructuring in Parameters

### Syntax

```javascript
function functionName({ property1, property2, ... }) {
  // function body
}
```

### Example 1: Basic Object Destructuring

```javascript
function printUserInfo({ name, age, city }) {
  console.log(`${name} is ${age} years old and lives in ${city}.`);
}

const user = { name: "Alice", age: 30, city: "New York", country: "USA" };
printUserInfo(user);
// Output: Alice is 30 years old and lives in New York.
```

### Example 2: With Default Values

```javascript
function greetUser({ name = "Guest", greeting = "Hello" }) {
  console.log(`${greeting}, ${name}!`);
}

greetUser({}); // Output: Hello, Guest!
greetUser({ name: "Bob" }); // Output: Hello, Bob!
greetUser({ name: "Charlie", greeting: "Hi" }); // Output: Hi, Charlie!
```

## Array Destructuring in Parameters

### Syntax

```javascript
function functionName([element1, element2, ...]) {
  // function body
}
```

### Example 3: Array Destructuring

```javascript
function getFirstAndLast([first, ...rest]) {
  const last = rest.pop();
  return `First: ${first}, Last: ${last}`;
}

console.log(getFirstAndLast([1, 2, 3, 4, 5])); // Output: First: 1, Last: 5
```

## Quick Revision Points

- Parameter destructuring works with both objects and arrays.
- It allows you to extract specific properties or elements directly in the function signature.
- You can provide default values for destructured parameters.
- It's possible to rename variables during destructuring using the syntax: `{ oldName: newName }`.
- Destructuring makes function definitions cleaner when working with complex objects or arrays.
- It's particularly useful for handling configuration objects with many optional properties.