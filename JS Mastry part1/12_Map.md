# JavaScript Maps

## What is a Map?

A Map is a built-in object in JavaScript that allows you to store key-value pairs where both the keys and values can be of any type. Unlike objects, Maps remember the original insertion order of the keys and are iterable.

## Sample Code:

```javascript
// Creating a Map
const myMap = new Map();

// Adding key-value pairs
myMap.set('name', 'John');
myMap.set(42, 'answer');
myMap.set(true, 'boolean');

// Getting values
console.log(myMap.get('name')); // Output: John
console.log(myMap.get(42));     // Output: answer

// Checking if a key exists
console.log(myMap.has(true));   // Output: true
console.log(myMap.has(false));  // Output: false

// Getting the size
console.log(myMap.size);        // Output: 3

// Deleting a key-value pair
myMap.delete(42);

// Iterating over a Map
for (let [key, value] of myMap) {
    console.log(`${key} = ${value}`);
}

// Clearing the Map
myMap.clear();
console.log(myMap.size);        // Output: 0

// Creating a Map from an array of key-value pairs
const mapFromArray = new Map([
    ['fruit', 'apple'],
    ['vegetable', 'carrot']
]);

// Converting Map to Array
const mapToArray = Array.from(mapFromArray);
```

## Summary:

- Maps store key-value pairs where keys and values can be of any type.
- Keys in a Map are unique; adding a duplicate key will overwrite the existing one.
- Maps maintain insertion order of elements.
- Maps are iterable and can be used with `for...of` loops.
- Maps provide methods for adding, getting, deleting, and checking for the existence of elements.
- Maps have a `size` property that returns the number of key-value pairs.

## Interview Topics:

1. **Map vs Object**:
   - When would you use a Map instead of an Object?
   - Performance differences between Maps and Objects for various operations.

2. **Key Equality**:
   - How does Map determine if two keys are the same?
   - Using objects or functions as Map keys.

3. **WeakMap**:
   - What is a WeakMap and how does it differ from a regular Map?
   - Use cases for WeakMap.

4. **Performance**:
   - Time complexity of common Map operations (set, get, delete, has).

5. **Iterating Maps**:
   - Different ways to iterate over a Map.
   - Order of iteration in Maps vs Objects.

6. **Use Cases**:
   - Real-world scenarios where Maps are particularly useful.

## Revision Points:

1. Maps allow keys of any type, while Object keys are always strings or symbols.
2. Use `set(key, value)` to add or update entries, `get(key)` to retrieve values.
3. `has(key)` checks if a key exists, `delete(key)` removes an entry.
4. `size` property gives the number of entries in the Map.
5. `clear()` removes all entries from the Map.
6. Maps are iterable and maintain insertion order.
7. Use `Array.from()` or spread operator to convert a Map to an Array.
8. Maps can use objects as keys, which is not possible with regular Objects.

## Advanced Example: Caching Function Results

```javascript
function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    }
}

// Usage
const expensiveFunction = (a, b) => {
    console.log('Computing...');
    return a + b;
};

const memoizedFunction = memoize(expensiveFunction);

console.log(memoizedFunction(2, 3)); // Output: Computing... 5
console.log(memoizedFunction(2, 3)); // Output: 5 (retrieved from cache)
```

This example demonstrates how to use a Map to create a memoization function, which caches the results of expensive function calls.

## Map vs Object: When to Use Which

```javascript
// Using an object
const userRoles = {
    john: 'admin',
    jane: 'editor',
    bob: 'subscriber'
};

// Using a Map
const userRolesMap = new Map([
    ['john', 'admin'],
    ['jane', 'editor'],
    ['bob', 'subscriber']
]);

// Advantages of Map:
// 1. Can use any type as key
userRolesMap.set({name: 'Alice'}, 'manager');

// 2. Easy to get the size
console.log(userRolesMap.size); // 4

// 3. Directly iterable
for (let [user, role] of userRolesMap) {
    console.log(`${user}: ${role}`);
}

// 4. Better performance for frequent additions and removals
userRolesMap.set('charlie', 'viewer');
userRolesMap.delete('bob');
```

This example illustrates some key differences between Maps and Objects, highlighting scenarios where Maps might be preferable.

Remember: Maps are powerful for managing collections of key-value pairs, especially when you need keys that aren't strings, want to preserve insertion order, or need to frequently add and remove entries. They provide a more robust and flexible alternative to plain objects in many scenarios.