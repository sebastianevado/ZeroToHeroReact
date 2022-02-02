// Dynamic import 
// Para realizar importacion de un elemento de forma dinamica para poder llamar piezas de codigo
//Que van a hacer que optimizemos mejor nuestro proyecto

const button = document.getElementById("btn");

button.addEventListener("click", async function (){
    const module = await import("./file.js");
    module.hello();
});

