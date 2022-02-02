// Tipos basicos etc..
//Boolean
var muted = true;
muted = false;
// muted = "callado"; error por asignacion
// numbers
var numerador = 42;
var denominador = 2;
var resultado = numerador / denominador;
// String
var nombre = "Sebastian";
//Arreglos
var people = [];
people = ["Isable", "Nicole", "Raul"];
people.push("Sebas");
var idAndPeople = [];
idAndPeople.push("Ricardo");
idAndPeople.push(190);
//Enum
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Verde"] = "Verde";
    Color["Azul"] = "Azul";
})(Color || (Color = {}));
var colorFavorito = Color.Verde;
console.log("Mi color favorito es ".concat(colorFavorito));
//Any
var comodin = 'Jokes';
comodin = { type: 'Wildcard' };
var someObject = { type: 'Coolcard' };
function add(a, b) {
    return a + b;
}
var sum = add(4, 6);
console.log(sum);
function createAdder(a) {
    return function (b) {
        return b + a;
    };
}
var addFour = createAdder(4);
var fourPlus6 = addFour(6);
function fullName(firstName, lastName) {
    return "".concat(firstName, " ").concat(lastName);
}
var sebas = fullName('Sebastian');
var rect = {
    ancho: 4,
    alto: 5
};
function area(r) {
    return r.alto * r.ancho;
}
var areaRect = area(rect);
console.log(areaRect);
