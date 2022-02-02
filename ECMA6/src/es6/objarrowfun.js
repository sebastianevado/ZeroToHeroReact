// Parametros en objetos

let thename = 'oscar';
let age = 32;

//oldway
obj = {thename: thename, age: age};


//ES6

obj2 = { thename, age}
console.log(obj2.age)


// Arrow functions
//Old way
const names = [
    { nombres: 'sebastian', age: 22},
    { nombres: 'maria', age: 23}
]

let listOfNames = names.map(function(item){
    console.log(item.nombres);
});

//ES6

let listOfNames2= names.map(item => console.log(item.age));

// const listOfNames3 = (nombres,age) =>{
//     console.log(nombres)   // otra manera
// }

// const listOfNamesmes4 = name =>{
//     ...//si solo vas a pasar un tiem
// }

const square = num => num * num; // otra manera de ser mas amigable