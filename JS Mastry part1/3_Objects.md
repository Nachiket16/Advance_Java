## Objects

- Objects store key value pair
- Objects don't have index
- Objects are reference type

```JS 
const person = {
    name:"Nachiket",
    age:26,
    phone:9988776655,
    "person hobbies": ["reading", "dancing", "singing"]
    }

person.gender = "male"; // Add new value into the object
console.log(typeOf person)  // Object
console.log(person.name) //value by dot
console.log(person.{"person hobbies"}) //value by bracket is accessed by key as it's string 

```

- For loop

```JS
const person = {
    name:"Nachiket",
    age:26,
    phone:9988776655,
    "person hobbies": ["reading", "dancing", "singing"]
    }

for(let key in person){
    console.log(key + " - " +person[key]);   //Print key - vlaue
}

console.log(Object.keys(person));
```

- Computed properties 

```JS
const key1 = "obj1"
const key2 = "obj2"

const value1 = "myVal1"
const value2 = "myVal2"

const object = {
    [key1] : value1,
    [key2] : value2
}
// { obj1: 'myVal1', obj2: 'myVal2' }
```

### Object destructuring

- By declaring let{bandName, famousSong } we are creating variables and value from the object

- After : we will renaming the variable name (eg. nameofBand)

```JS

const band = {
 bandName : "one direction",
 famousSong : "story of my life",
 year : 2011,
 country : "UK"   
}

let {bandName:nameOfBand, famousSong} = band;

console.log(nameOfBand," - ", famousSong) //one direction  -  story of my life

```


### Object inside array

```JS
const users = [
    {userId: 1, name:'Nachiket', gender:'M'},
    {userId: 2, name:'Aniket', gender:'M'},
    {userId: 3, name:'Richa', gender:'F'},
]

for(let user of users){
    console.log(user);
}

// Nested destructuring

const[user1,user2,user3] = users;
console.log(user1,user2,user3); //Will print the Object itself

const[{userId},{name:secUserName} , {name}] = users
console.log(userId,secUserName,name);   //1 Aniket Richa
```