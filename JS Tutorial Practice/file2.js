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

cosn