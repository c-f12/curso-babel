//SOLO en ES6
//Esto es de 'mentirijillas'
//azucar sintactico
// class es lo mismo que hacer un objeto constructor
class User {
    //static.numUser=0
    constructor(nombre, apellidos, edad, genero){
        this.nombre = nombre,
        this.apellidos = apellidos,
        this.edad = edad,
        this.genero = genero
        //++numUsers
    }
    //lo que va al prototipo no lleva this, lo q va en el objeto si
        saludar(){
            console.log(`Hola, soy ${this.nombre}
            ya somos muchos`)
            // ${User.numUsers}
        }
}

//Herencia:
//Creamos un obj nuevo que como prototipo tiene user:
class Alumno extends User{
    constructor(nombre, apellidos, edad, genero, curso){
        super(nombre, apellidos, edad, genero)
        this.curso = curso
    }
}


oUser1 = new User('Juan','Lopez',33,'H');
oUser1.saludar();
console.log(oUser1);

oAlumno1 = new Alumno('Juan', 'Lopez', 33, 'H', 'Angular');
//los objetos son dinamicos, puedes añadir propiedades. Añadimos el array de notas:
oAlumno1.notas = [9, 8, 10];
oAlumno1.saludar();
console.log(oAlumno1);

oAlumno2 = new Alumno('Luis','Gomez', 33, 'H', 'Angular');
console.log(oAlumno2);