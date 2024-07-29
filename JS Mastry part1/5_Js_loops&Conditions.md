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

- Falsy value -> false, "", null, undefined, 0 (All this are false value)
- Truthy value -> true, "abc", 1, -1 (Any value is truthy value)

#### Operator

- Ternary operator
```JS
let age = 5;
let drink = age >= 5 ? "coffee" : "milk"
```

- and , or operator
```JS
if(age > 5 || age < 18 ){
    adult=false;
}else if(age > 18 && beverage=="alcohole"){
    adult=true;
}
```

#### Switch statement
- Rather than using the if else statement on multiple  lines we can include switch statement

- **break** will stop the execution of the code after satifying the condition. It will jump out of the method
- **continue** will restart the execution from start of the method line, eg in for loop if condion is having continue it will start from start by increasing the

```JS
let day = 2;
switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");    
}

```

### For loop

```JS
for(let i=0; i<=9; i++){
    console.log(i);
}
```

#### While loop
- Lets suppose we want to print i value from 0-9 but not more than 9

```JS
let i = 0 ;
while(i<10){
    console.log(i++);
}
```
#### Do while loop
- Do-while loop get executed at least one time 

```JS
let i = 10 ;
do{
    console.log(i);
}while(i<10);
```


