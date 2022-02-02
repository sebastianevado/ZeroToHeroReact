var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
]

//METODO FIND --> find() validar

var encuentraArticulo =  articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

console.log(encuentraArticulo);
console.log("-------")
// Metodo forEach()

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//some() --> nos regresa una validacion

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <=700;
});

console.log("-------")
console.log(articulosBaratos) // solo regresa un booleano