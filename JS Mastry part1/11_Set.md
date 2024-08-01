# JavaScript Sets

## What is a Set?

A Set is a built-in object in JavaScript that stores unique values of any type, whether primitive values or object references. It's an iterable and allows for fast access and manipulation of its elements.

## Sample Code:

```javascript
// Creating a Set
const mySet = new Set([1, 2, 3, 4, 4, 5]);

console.log(mySet); // Output: Set(5) { 1, 2, 3, 4, 5 }

// Adding elements
mySet.add(6);
mySet.add('6');

// Checking if an element exists
console.log(mySet.has(4)); // Output: true
console.log(mySet.has(7)); // Output: false

// Removing an element
mySet.delete(3);

// Getting the size
console.log(mySet.size); // Output: 6

// Iterating over a Set
for (let item of mySet) {
    console.log(item);
}

// Converting Set to Array
const myArray = Array.from(mySet);
// OR
const myArrayAlt = [...mySet];

// Clearing the Set
mySet.clear();
console.log(mySet.size); // Output: 0
```

## Summary:

- Sets store unique values of any type.
- Elements in a Set are inserted in the order they are added.
- Sets are iterable and can be used with `for...of` loops.
- Sets provide methods for adding, deleting, and checking for the existence of elements.
- Sets automatically remove duplicate values.
- Sets don't have keys or indexes to access elements.

## Interview Topics:

1. **Set vs Array**:
   - When would you use a Set instead of an Array?
   - Performance differences between Sets and Arrays for various operations.

2. **Uniqueness**:
   - How does Set ensure uniqueness of its elements?
   - How does Set handle object references?

3. **Set Operations**:
   - Implementing union, intersection, and difference operations using Sets.

4. **WeakSet**:
   - What is a WeakSet and how does it differ from a regular Set?

5. **Performance**:
   - Time complexity of common Set operations (add, delete, has).

6. **Use Cases**:
   - Real-world scenarios where Sets are particularly useful.

## Revision Points:

1. Sets store unique values; duplicates are automatically removed.
2. `new Set()` creates an empty Set; `new Set(iterable)` creates a Set from an iterable.
3. `add()` adds a new element, `delete()` removes an element, `has()` checks for an element.
4. `size` property gives the number of elements in the Set.
5. `clear()` removes all elements from the Set.
6. Sets are iterable and work with `for...of` loops and the spread operator.
7. Use `Array.from()` or spread operator to convert a Set to an Array.
8. Sets can store both primitive values and object references.

## Advanced Example: Removing Duplicates from an Array of Objects

```javascript
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Alice' },
    { id: 3, name: 'Charlie' }
];

const uniqueUsers = Array.from(
    new Set(users.map(user => JSON.stringify(user)))
).map(user => JSON.parse(user));

console.log(uniqueUsers);
// Output: [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' }
// ]
```

This example demonstrates how to use a Set to remove duplicate objects from an array. We first stringify the objects to compare them as unique strings, then parse them back into objects.

## Set Operations

```javascript
function union(setA, setB) {
    return new Set([...setA, ...setB]);
}

function intersection(setA, setB) {
    return new Set([...setA].filter(x => setB.has(x)));
}

function difference(setA, setB) {
    return new Set([...setA].filter(x => !setB.has(x)));
}

// Usage
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

console.log(union(setA, setB));        // Set(6) { 1, 2, 3, 4, 5, 6 }
console.log(intersection(setA, setB)); // Set(2) { 3, 4 }
console.log(difference(setA, setB));   // Set(2) { 1, 2 }
```

This example shows how to implement basic set operations using JavaScript Sets.

Remember: Sets are powerful for managing unique collections of data and performing set operations efficiently. They're especially useful when you need to eliminate duplicates or check for the existence of items frequently.