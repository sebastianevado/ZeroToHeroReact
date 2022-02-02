// Devolver clave y valores de una matriz

const data = {
    fronted: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);

// Contar elementos de un objeto

console.log(entries.length);
//Object values 

values = Object.values(data); 
console.log(values);
console.log(values.length);

//Pading agregar cadena vacia o elementos a un string

const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12, '---'))
console.log('food'.padEnd(12, '---'))

const obj = {
    names: 'oscar',
}