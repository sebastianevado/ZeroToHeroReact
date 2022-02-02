// Replace all

const string = 'JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web';

const replacedString = string.replaceAll('JavaScript','C#')
console.log(replacedString);

// Metodos privados

class Message{
    show(val){ //# para hacer el metodo privado
        console.log(val);
    };
}

const messages = new Message();
messages.show('Hi');

//Promise any capturando la respuesta de la primera promesa satisfactoria

const promise1 = new Promise((resolve, reject)=> reject("1"));
const promise2 = new Promise((resolve, reject)=> resolve("2"));
const promise3 = new Promise((resolve, reject)=> resolve("3"));

Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response));

// this ref PERMITE TENER REFERENCIA A OTRO OBJETO SIN EVITAR QUE SEA RECOGIDO POR EL GARBAGE COLECTOR


// class anyClass {
//     constructor(element){}
//     this.ref = new WeakRef(element)
// }

//AND LOGICO OR LOGICO Y ANULACION LOGICA

let isTrue = true;
let isFalse= false;
console.log(isTrue &&= isFalse);
console.log(isTrue ||= isFalse);
console.log(isTrue ??= undefined);