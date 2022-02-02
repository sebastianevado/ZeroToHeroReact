// Tipos basicos etc..
//Boolean
var muted: boolean = true;
muted = false;
// muted = "callado"; error por asignacion

// numbers
var numerador: number = 42;
var denominador: number = 2;
var resultado = numerador/denominador;

// String
var nombre: string  ="Sebastian";

//Arreglos
var people: string[] = [];
people = ["Isable","Nicole","Raul"];
people.push("Sebas")

var idAndPeople: Array<string | number> = []
idAndPeople.push("Ricardo")
idAndPeople.push(190)

//Enum
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul'
}

var colorFavorito: Color =  Color.Verde
console.log(`Mi color favorito es ${colorFavorito}`)

//Any

var comodin: any ='Jokes'
comodin = {type:'Wildcard'};

var someObject: object = {type:'Coolcard'}

function add(a: number, b: number): number{
    return a + b
}

const sum = add(4,6)
console.log(sum);  

function createAdder(a:number): (number) => number{
    return function (b:number){
        return b + a
    }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)


function fullName(firstName: string, lastName?: string):string{ //lasName: string = "richard" para valores por defecto
    return `${firstName} ${lastName}`
}

const sebas = fullName('Sebastian')


//interface
interface Rectangulo {
    ancho: number;
    alto: number;

}

let rect: Rectangulo = {
    ancho:4,
    alto:5,
    // color: Color
}


function area(r:Rectangulo): number {
    return r.alto * r.ancho
}

const areaRect = area(rect)
console.log(areaRect);

rect.toString = function() {
    return `Un rectangulo ${this.color}`;
}


