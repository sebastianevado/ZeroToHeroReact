//Para manejar POO
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();

console.log(calc.sum(5,6));



// import { hello } from './module';

// hello();

//GENERATORS

function * helloWorld () {
    if (true){
        yield 'Hello, ';
    }
    if (true){
        yield 'World!'
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);