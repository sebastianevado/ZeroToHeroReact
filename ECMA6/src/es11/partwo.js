const aBigNumber = 90071992540991n;

const anotherBigNumber = BigInt(90071992540991);

console.log(aBigNumber);
console.log(anotherBigNumber);


//Promise all set upque devuelve una promesa despues de que todas las promesas anteriores se hallan resuelto

const promise1 = new Promise((resolve, reject)=> reject("reject"));
const promise2 = new Promise((resolve, reject)=> resolve("resolve"));
const promise3 = new Promise((resolve, reject)=> resolve("resolve1"));

Promise.allSettled([promise1, promise2, promise3]) 
    .then(response => console.log(response))


// Global this -- similar al objeto global

// 🌎 Global This

// console.log(window);
console.log(globalThis);

// 🔍 Nuevo operador lógico: null operator

const fooo = null ?? 'default string';
console.log(fooo);

const fooo2 = 'not null' ?? 'default string';
console.log(fooo2)


// ⛓ Optional chaining

const user = {};
console.log(user?.profile?.email); // Este ayuda a no romper tu app 

if(user?.profile?.email) {
    console.log('email')
} else{
    console.log('fail')
}

