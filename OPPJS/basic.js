function Student (nam,lasnam,ages) {
    this.name = nam;
    this.lastName = lasnam;
    this.age = ages;
}

const Usuario = new Student('juan','Sanchez',32);
console.log(Usuario);