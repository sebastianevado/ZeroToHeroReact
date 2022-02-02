var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
]


// Filter va a validar si es v o f y va  a generar un nuevo array

var articulosFiltrados = articulos.filter(function (articulo) {
    return articulo.costo <= 500
});

console.log(articulosFiltrados)
// Segundo metodo

// <-------------------->
//Metodo map

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

console.log(nombreArticulos)
