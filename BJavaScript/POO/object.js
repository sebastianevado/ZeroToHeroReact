// Crear objetos en Javascript


var miAuto = {
    brand: "Toyota",
    model: "Corolla",
    age: 2020,
    details: function(){
        console.log(`Auto ${this.brand} ${this.model} ${this.age}`)
    }

};
//Acceder a las propiedades de un objeto

miAuto.details();
// console.log(miAuto.age)
// console.log(typeof(miAuto.age))