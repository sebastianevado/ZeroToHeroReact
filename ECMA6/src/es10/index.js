let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

// Flat map permite mapear cada elemento luego mapearle una funcion

let array2 = [1,2,3,4,5]

console.log(array2.flatMap(value => [value, value * 2]));

// Eliminar espacios en blanco de iun string


let hello = '        hello world';
console.log(hello);
console.log(hello.trimStart());

let hello2 = 'helo world     ';
console.log(hello2.trimEnd());


//Optional catch binding donde podemos pasar de forma opcional el valor de error al parametro de catch

// try {

// } catch{
//     error
// }

//Cuando quieres transformar los arreglos a objetos

let entries = [["name","oscar"],["age",32]];

console.log(Object.fromEntries(entries));


//Objeto del tipo simbolo que nos va a permitir acceder a una descripcion

let mySymbl = `My Symbol`;
let mysymbl = Symbol(mySymbl);
console.log(mysymbl.description);