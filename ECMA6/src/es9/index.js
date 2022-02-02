// Operador de reposo para extraer propiedades de un objeto que aun no se han construido

const obj = {
    name: 'oscar',
    age: 32,
    country: 'MX'
};

let {country, ...all} = obj;
console.log(all);

// Propiedade de propagacion

const obj1 = {
    name: 'Sebastian',
    age: 22
}

const obj2 = {
    ...obj1,
    country: 'MX'
}

console.log(obj2)

// PROMISE .finally para saber cunado termina un llamado

//Crear promesa

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(()=>resolve('Hello World'),3000)
            : reject(new Error('Test Error'))
    });
};

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(()=> console.log("Finalizo"))

//Regex

// Agrupar bloques de regex y acceder

const regexData =  /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);

