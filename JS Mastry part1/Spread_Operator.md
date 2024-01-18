### Spread Operator

```JS
const arr1 = [1,2,3]
const arr2 = [4,5,6]

const newArr = [...arr1, ...arr2, 7,8,9]
console.log(newArr); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


//Spread operator in string
const newArray = [..."abcd"]
console.log(newArray) // [ 'a', 'b', 'c', 'd' ]

```
- Object spread operator 

```JS
const obj1 = {
    key1 : 1,
    key2 : 2
};

const obj2 = {
    key1 : "one",
    key3 : 3,
    key4 : 4
}

const newObj = {...obj1, ...obj2}
console.log(newObj) //{ key1: 'one', key2: 2, key3: 3, key4: 4 }
```