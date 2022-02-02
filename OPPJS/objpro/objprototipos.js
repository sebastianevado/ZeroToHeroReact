// Objetos literales y prototipos
//Objetos literales

const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: ["Curso Definitivo de HTML y CSS",
        "Curso Practico HTML y CSS"],

    //Metodo
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
    // aprobarCurso: function(){

    // }
}

//Hacer Natalia apruebe otro curso

// natalia.cursosAprobados.push("Curso de Responsive Design")

//Prototipos

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student(
    "Juanita Alejandra",
    15,
    ["Curso de introduccion a iOS","Curso basico de swift"]
)