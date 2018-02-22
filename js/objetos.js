//objeto literal: (normalmente no suelen tener funciones)
const oUserLit = {
    nombre: 'Pepe',
    apellidos: 'Perez',
    edad: 23,
    genero: 'H',
    /* saludar: function(){
        console.log(`Hola, soy ${this.nombre}`)
    } */
}

oUserLit.saludar = function(){
    console.log(`Hola, soy ${this.nombre}`)
}

const oUserLit2 = {
    nombre: 'Julia',
    apellidos: 'Perez',
    edad: 23,
    genero: 'M',
    saludar: function(){
        console.log(`Hola, soy ${this.nombre}`)
    }
}

oUserLit.saludar = function(){
    console.log(`Hola, soy ${this.nombre}`)
}


/* function constructora*/
function User(nombre, apellidos, edad, genero){
    this.nombre = nombre,
    this. apellidos = apellidos,
    this.edad = edad,
    this.genero = genero,
    ++User.prototype.numUsers
}

//las funciones q pasas al prototipo no se instancian:
//se pueden meter variables en el prototipo, pero tiene que ser la misma para todos
User.prototype.numUsers = 0;
User.prototype.saludar = function(){
    console.log(`Hola, soy ${this.nombre} y ya somos ${this.numUsers}`);
}

var mostrarA1 = pData1 => console.log(this);

/*Formas de invocación:
mostrar()
//mecanismo invocación metodo. Llamar a la funcion log dentro del método:
console.log()
new.User()
call/apply
*/

oUser1 = new User('Juan','Lopez',33,'H');
oUser2 = new User('Raquel','Lopez',31,'M');

console.log(oUserLit);
console.log(oUser1);

console.log(typeof oUserLit);
console.log(typeof oUser1);
//saludar es un método. Cuando invocas un método, busca primero en el objeto y luego en el prototipo
//la funcion forEach esta en el prototipo de todos los objetos array
/* Array.prototype.saludar = function(){
    console.log(`Hola, soy ${this.nombre}`);
}
 */
oUserLit.saludar();
oUser1.saludar();
oUserLit2.saludar();
oUser2.saludar();


