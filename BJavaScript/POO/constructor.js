// Funcion constructora para generar un template de un objeto
// Para ir haciendo nuevas instancias


function auto(brand, model, age) {
    this.brand = brand;
    this.model = model;
    this.age = age;
}

var autoNuevo = new auto("Tesla","Model 3","2020");
var autoNuevo2 = new auto("Tesla","Model X","2018");

console.log(typeof(autoNuevo));
console.log(autoNuevo);
console.log(autoNuevo2);