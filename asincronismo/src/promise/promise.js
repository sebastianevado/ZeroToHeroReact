// ECMA6 
const somethingWillHappen = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('Yes')
        }else{
            reject('Ups F')
        }
    })
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error))

somethingWillHappen2 = () =>{
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(() => {
                resolve('True')
            }, 2000)
        }else{
            const error = new Error('whoops!')
            reject(error);
        }
    })

}
somethingWillHappen2()
    .then(response =>console.log(response))
    .then(()=> console.log('Chain'))
    .catch(error => console.error(error))

//Encadenar promesas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
 .then(response => {
     console.log('Array of results', response);
 })
 .catch(error => console.error(error))
