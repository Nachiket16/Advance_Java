#### Intorduction to arrays

``` JS
// It's ordered collection of the data

let fruits = ["apple","mango","grapes"]
let num = [1,2,3,4]
console.log(fruits[0]);
let mixed = ["fruit",2,3.33, null]

```
- Array is an Object data type 
- How to check if the object is array or not

``` JS
let fruits = ["apple","mango","grapes"];
let obj = {}; // It's Object litteral

console.log(Arrays.isArray(fruit)) //Ture

```

- Add , Remove element into the array
- unshift(element), shift()
- push(element), pop()
- push() and pop() are faster than unshift() & shift()

```JS
let fruits = ["apple","mango","grapes"];
fruits.push("banana")  // Add into the array
let popedElement = fruits.pop();   //Remove and return the removed element
console.log(popedElement)

fruits.unshift("strawberry") // Add element at the start of the array 
fruits.shift() // Remove first element
```

#### primitive vs  reference data type

- For all the primitive data type JS pass by value
- For non premitive are passed by reference

#### Cloning array

```JS
let array1 = [1,2,3];
// 1st -> Fast
let array2 = array1.slice(0).concat(4,5)
// 2nd -> concat the array1 into the array2 blank
let array2 = [].concat(array1,[4,5]);

// 3rd -> new way using spread operator
// Spread opertor spread the array element into the array2
let array2 = [...array, 1,4,5]
let array2 = [...array, ...oneMoreArray]    //For extra array addition

```

#### For loop in array 
```JS
let fruits = ["apple","mango","grapes"];
fruits.push("banana") ;
for(let i =0 ; i<fruits.length; i++){
    console.log(fruits[i]);
}

//While loop
let i = 0;
while(i<fruits.length){
    console.log(fruits[i])
}

//for of loop in array -> gives value
for(let fruit of fruits){
    console.log(fruit)
}

//for in loop in array -> gives index
for(let index in fruits){
    console.log(fruit[index])
}

```

#### const vs let for array

- If we define array using the let it will override the previous array if initialize once again
- If define with const then array will throw error as it's constant variable

#### Array Destructuring

```JS
const myArr = ["v1","v2"]

let [myValue1, myValue2] = myArr;
console.log("Vlaue of myValue1",myValue1)
console.log("Vlaue of myValue2",myValue2)

const myArr = ["v1","v2","v3","v4"]

let [myValue1, myValue2, ...myNewArray] = myArr;
console.log("Vlaue of myValue1",myValue1)
console.log("Vlaue of myValue2",myValue2)
console.log("Remaining array element" , myNewArray)

```