# JavaScript Iterables

## What is an Iterable?

An iterable is an object that can be looped over or iterated upon. It implements the iterable protocol, which allows objects to define or customize their iteration behavior.

## Sample Code:

```javascript
// Array (built-in iterable)
const arr = [1, 2, 3];
for (const item of arr) {
    console.log(item); // Outputs: 1, 2, 3
}

// String (built-in iterable)
const str = "Hello";
for (const char of str) {
    console.log(char); // Outputs: H, e, l, l, o
}

// Custom iterable
const customIterable = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
};

for (const item of customIterable) {
    console.log(item); // Outputs: 1, 2, 3
}
```

## Summary:

- Iterables are objects that can be iterated over using a `for...of` loop.
- They implement the `Symbol.iterator` method, which returns an iterator object.
- Built-in iterables in JavaScript include Arrays, Strings, Maps, Sets, and more.
- Custom objects can be made iterable by implementing the iterable protocol.
- Iterables work seamlessly with the spread operator (`...`) and destructuring.

## Interview Topics:

1. **Iterable Protocol**: 
   - Explain how the iterable protocol works in JavaScript.
   - How to make a custom object iterable?

2. **Iterator vs Iterable**: 
   - What's the difference between an iterator and an iterable?
   - How are they related?

3. **Use Cases**: 
   - When would you create a custom iterable?
   - Benefits of using iterables in your code?

4. **Built-in Iterables**: 
   - List some built-in JavaScript iterables.
   - How do they differ in their iteration behavior?

5. **Performance**: 
   - Discuss the performance implications of using iterables vs traditional loops.

6. **Generators and Iterables**: 
   - How are generator functions related to iterables?
   - Advantages of using generators to create iterables?

## Revision Points:

1. An iterable must implement the `Symbol.iterator` method.
2. The `Symbol.iterator` method should return an object with a `next()` method.
3. The `next()` method should return an object with `value` and `done` properties.
4. `for...of` loops automatically work with iterables.
5. Spread operator (`...`) and destructuring also work with iterables.
6. Arrays, Strings, Maps, and Sets are built-in iterables in JavaScript.
7. Custom iterables can be infinite, lazy-loaded, or represent complex data structures.
8. Generator functions provide an easy way to create custom iterables.

## Advanced Example: Fibonacci Sequence Iterable

```javascript
const fibonacci = {
    *[Symbol.iterator]() {
        let [prev, curr] = [0, 1];
        while (true) {
            yield curr;
            [prev, curr] = [curr, prev + curr];
        }
    }
};

// Get first 10 Fibonacci numbers
const first10 = [...fibonacci].slice(0, 10);
console.log(first10); // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
```

This example demonstrates a powerful use case for iterables: creating an infinite sequence (Fibonacci) that can be consumed on-demand without storing all values in memory.

Remember: Iterables provide a unified way to work with different types of collections and sequences in JavaScript, making your code more flexible and expressive.