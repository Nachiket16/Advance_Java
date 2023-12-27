# History 

- Brendan Eich created Moch -> LiveScript -> JavaScript 
(as java was populer the changed the name from LiveScript to JS)    
Used with the Netscape navigator

- Microsoft created JScript

- As confusion between the browser increased they created the standard with the help of **ecma** 

- ECMAScript and JS are the same (Oracle has the licence of java)   
ES1 : 1997  
ES5 : 2009 (mass adoption)  
ES6 : 2015 (Modern JS)

TC39 a group of developer who decide the new update the JS as new update come every year after ES6 as it was taking multiple yrs for the update.
JS is Backword compatible but not forward compatible.

- Babel is a JS compiler which help to **transpile** the new JS will run on the old browser

# Variables

### Rules for naming variables

- You can't start with number eg. 1Name(invalid), name1(valid)
- You can use only underscore_ or doller$ symbol eg. _Name, $Name
- Follow camelCase convention

#### **let** vs **var** vs **const**

- Try using let while assigning the variable
- **const** can't be changed or reassigned, equivalent to JAVA final keyword
- const must be assigned a value at the time of initialization 

#### String
- String has few methods like
- trim() -> remove spaces from start and end of the body
- toUpperCase() -> convert each character of the string into the captial letter
- slice(start,end) -> Index start with 0 
- Strings are immutable so after using the method you should override or assign to new varible to store the changes

#### Datatype
- **string**    (let name="nachiket")
- **number**    (let age = 18)
- **booleans**  (let isAdult = true)
- **null**      (let phone = null)
- **undefined** (let email;)
- **BigInt**    (let number = BigInt(123), let myNuber = 123n - used for large number)
- **Symbol**
                                    
 Check datatype using **console.log(typeof(variable));**    
 Bigint can't have operation with another data type
#### Convert datatypes

- convert number to string
``` JS
let age = 18;
age = age+"";   // convert number to string
age = +age; // convert string to number
age = Number(age); // anoter way to convert the string to number by typecasting
console.log(typeof age);
```

#### Template string

```JS

let age = 26
let name = "Nachiket"

// One way to decalre the aboutme is like this 

let aboutMe = "My name is "+ name + " and my age is "+age;

// But By using the template which are `` and $ with placeholder {} we can dynamically add the value 

let aboutMe = `My name is ${name} and my age is ${age}`
console.log(aboutMe);

```

#### == vs ===
- == check value will ignore the datatype
- === check value as well as the datatype
- != check the value if it's not equal ignore the datatype
- !== check the value if it's not equal and check the datatype as well

#### if else condition 

```JS
let age =17 
if(age>=18){
    console.log("user is adult")
}else{
    console.log("user is not an adult")
}
```

#### truthy and falsy values

// 