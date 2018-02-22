console.log('Hello World');

/*
Tipos elementales(objetos inmutables almacenados en memoria):
    string
    number
    boolean
    
    undefined
    
    Object (es mutable):
    funciones constructoras de objetos:
    variaciones de objetos:
    - Arrays
    - String
    - Number
    - Boolean
    - Function
    - Date
    - Math
    - JSON
    - RegExp
    - Error

*/

var nombreAlumno = "Pepe";
var edadAlumno = 23;
var isAlumno = true;

console.log( nombreAlumno.toUpperCase() );
console.log(typeof nombreAlumno);
console.log(typeof edadAlumno);
console.log(typeof isAlumno);

var oNombreAlumno = new String('Pepe');
var oEdadAlumno = new Number(23);
var oIsAlumno = new Boolean(true);
console.log(typeof oNombreAlumno);
console.log(typeof oEdadAlumno);
console.log(typeof oIsAlumno);

console.log(oNombreAlumno);
console.log(oEdadAlumno);
console.log(oIsAlumno);

console.log ( oNombreAlumno.toString() );
console.log ( oNombreAlumno.valueOf() );
console.log( oEdadAlumno.valueOf() );
console.log( oIsAlumno.valueOf() );

