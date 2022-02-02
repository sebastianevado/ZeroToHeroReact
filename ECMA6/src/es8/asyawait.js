const helloWorld  = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello Worold!'), 3000)
        : reject(new Error('Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello)
}

helloAsync();

const anothorFunctions = async () =>  {
    try {
        const hello = await helloWorld();
        console.log(hello)
    } catch (error){
        console.log(error)
    }
}

anothorFunctions();