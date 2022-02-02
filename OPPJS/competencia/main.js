class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }
    publicar(){
        console.log(`${this.studentName} ${this.studentRole}`)
        console.log(`${this.likes} likes`)
        console.log(this.content)
    }
}

function videoPlay(id){
    const urlSecreta = "https://videosecreto.com/" + id
    console.log(`Se esta reproduciendo desde la url ${urlSecreta}`);
}
function videoStop(id){
    const urlSecreta = "https://videosecreto.com/" + id
    console.log(`Se pauso desde la url ${urlSecreta}`);
}
class PlatziClass {
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID
    }
    reproducir(){
        videoPlay(this.videoID)
    }
    pausar(){
        videoStop(this.videoID)
    }

}
class Student  {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    aprovedCourses = [],
    leargningPath = [],
  }) {
    this.name = name;
      this.email = email;
      this.username = username;
      this.socialMedia = {
          twitter,
          instagram,
          facebook,
      }
      this.aprovedCourses = aprovedCourses;
      this.leargningPath = leargningPath;
    }
    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "Profesor"
        });
        comment.publicar();
    }
}
class FreeStudent extends Student {
    constructor (props) {
        super(props);
    }
    approveCourse (newCourse) {
        if(newCourse.isFree){
            this.aprovedCourses.push(newCourse)
        } else {
            console.warn(`Lo sentimos ${this.name} no tienes acceso a este curso`)
        }
    }
}

class BasicStudent extends Student{
    constructor (props) {
        super(props);
    }
    approveCourse (newCourse) {
        if(newCourse.lang !=="english"){
            this.aprovedCourses.push(newCourse)
        } else {
            console.warn(`Lo sentimos ${this.name} no tienes acceso a este curso`)
        }
    }
}

class ExpertStudent extends Student{
    constructor (props) {
        super(props);
    }
    approveCourse (newCourse) {
        this.aprovedCourses.push(newCourse)
    }
}
class TeacherStudent extends Student{
    constructor (props) {
        super(props);
    }
    approveCourse (newCourse) {
        this.aprovedCourses.push(newCourse)
    }
}
class Course {
    constructor({
        name,
        classes=[],
        isFree = false,
        lang = "Spanish"
    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }
    get name(){
        return this._name;
    }
    set name(nuevoNombrecito){
        if (nuevoNombrecito === "Curso malito de programacion"){
            console.error("Stop...")
        } else{
            this._name = nuevoNombrecito
        }
    }

}
const cursoProgBasica =new Course({
    name: "Curso de Programacion Basica",
    isFree: true
})
const definitivoHtmlCss =new Course({
    name: "Curso Definitivo HTML y CSS"
})
const practicoHtmlCss =new Course({
    name: "Curso Practico HTML y CSS",
    lang: "English"
})
class learninPath {
    constructor({
                    name,
                    courses = [],
                }) {
        this.name = name;
        this.courses = courses
    }
}
const escuelaWeb = new learninPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,definitivoHtmlCss,practicoHtmlCss
    ]
});
const escuelaData = new learninPath(
    {
        name: "Escuela de Data Science",
        courses: [
            cursoProgBasica,
            "Curso de Analisis de Datos",
            "Curso Practico de Anlisis de Datos"
        ]
    }
);
const escuelaVgs = new learninPath(
    {
        name: "Escuela de Desarrollo de Video Juegos",
        courses: [
            cursoProgBasica,
            "Curso Definitivo C#",
            "Curso Practico C# con Unity"
        ]
    }
);
const angie = new BasicStudent({
    name: "Maria Angelica",
    username: "Honey",
    email: "magp@outlook.com",
    twitter: "angp1212",
    facebook: "Maria Angelique",
    leargningPaths: [escuelaWeb,escuelaData]
});
const sebas = new FreeStudent({
    name: "Sebastian Nevado",
    username: "sebatianevado",
    email: "senadev@outlook.com",
    facebook: "Sebis",
    leargningPaths: [escuelaWeb,escuelaData]
});
const freddy = new TeacherStudent({
    name: "Freddy Rincon",
    username: "freddier",
    email: "sfrifri@outlook.com",
    instagram: "SeFrido",
});