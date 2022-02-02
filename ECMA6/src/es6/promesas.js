// Promesas

const helloPromise = () => { //esta funcion devolvera un resolve o reject dependiendo si se cumple
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Hey!')
        } else {
            reject('Ups!?')
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(()=> console.log('Hello'))
    .catch( error => console.log(error));