// Cuando las variables y las funciones se declaran antes de las funciones
//console.log(miNombre); --- Esto produce hoisting

var miNombre;
miNombre = "Sebastian";
console.log(miNombre)


// Hoisting con las funciones

console.log(saludo());

function saludo() {
    return 'Hi'
}


console.log(saludo());













