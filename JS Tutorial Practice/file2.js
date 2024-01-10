let fruits = ["apple","mango","grapes"];
fruits.push("banana") ;
for(let i =0 ; i<fruits.length; i++){
    console.log(fruits[i]);
}
console.log("----------------------------")

let i = 0;
while(i<fruits.length){
    console.log(fruits[i])
    i++;
}
console.log("----------------------------")

for(let fruit of fruits){
    console.log(fruit)
}