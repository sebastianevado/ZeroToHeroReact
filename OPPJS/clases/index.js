//Prototipos con la sintaxis de clases

class Student {
    constructor({
        name,
        age,
        cursosCompletados = [],
        email,
    }){
        this.name = name;
        this.age = age;
        this.cursosCompletados = cursosCompletados;
        this.email = email;

    }
    aprobarCurso(nuevoCursito){
        this.cursosCompletados.push(nuevoCursito)
    }
}

const angie = new Student({
    email: "magp19@outlook.com",
    name: "Maria Angelica",
    age: 23,
    cursosAprobados: [
        "Pensamiento logico"
    ]
})

// const angie = new Student(
//     "Maria Angelica",
//     23,
//     ["Curso de Python","Curso de analisis de Datos"]
// );

//ROR Recibe un objeto Retorna un objeto

