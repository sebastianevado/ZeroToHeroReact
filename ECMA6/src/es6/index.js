function newFunction(name, age, country){
    var name  = name || 'oscar';
    var age  = age || 32;
    var country  = country || 'COL';
    console.log(name,age, country);
}
// es6


function newFunction2(name = 'oscar',age=32,country='MX'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo',21,'COL');

//Temlates literals para concatenacion

let hello = "Hello";
let world = "world";
let epicPhrase = hello + " " + world
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// LET, CONST, Multilinea, Spread Operator y Desestructuracion