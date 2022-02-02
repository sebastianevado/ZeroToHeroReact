// LET, CONST, Multilinea, Spread Operator y Desestructuracion

//Old way
let lorem = "Esto es una frase epica que quiero separar \n"
+ "nanana batman nanana batman."
// Es6

let lorem2 = `otra frase epica que necesitamons 
ahora es otra frase epica`;

// console.log(lorem2);

//Destructuracion

let person = {
    'name': 'sebastian',
    'age': 22,
    'country': 'COL'
}

console.log(person.name, person.age);

let { name,age,country } = person;

console.log(name,age,country); //COOL


// Operador de propagacion
//--- Spread Operator-----

let team1 = ['Maria','Sebastian','Gabriela'];
let team2 = ['Angelica','Viktor','Sasha'];

let education = ['David', ...team1, ...team2]

console.log(education);

// let var const

//Var === global
//Let === local

{
    var globalVar = "Global Var"
}

{
    let globalLet = 'Global Let'
    console.log(globalLet)
}

console.log(globalVar)

// CONST

const a = 'b';

// No se puede reasignar 