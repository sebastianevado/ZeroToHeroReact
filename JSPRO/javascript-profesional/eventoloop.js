// Promesas dark-shit serious

function moreAsync(){
    console.log("Start");
    setTimeout(() => {
        console.log("Set time out")
    }, 0);
    Promise.resolve("Promise 1 ").then(msg => console.log(msg));
    Promise.resolve("Promise 2 ").then(msg => console.log(msg));
    console.log("End")
}

moreAsync();