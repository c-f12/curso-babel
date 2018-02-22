/* js es un lenguaje orientado a objetos
basado en prototipos, no en clases */

const user = {
    'nombre': 'Pepe',
    apellido: 'Perez',
    edad: 23,
}

// user = {}; --> daría error.

const mostrarA1 = pData1 => {
    pData1.genero = 'H';
    console.log(pData1)
};

/*Clonar objetos:
    
    Creación de strings a partir de un objeto:
        mostrarA1(JSON.parse(JSON.stringify(user)));
            JSON.stringify(user) -> crea un string de tipo JSON.
            JSON.parse(string_tipo_JSON) -> Te devuelve el objeto. Lo serializas.Cambia el string a objeto.
       
    Clonas el objeto user en el objeto vacío:
        mostrarA1( Object.assign({},user) );
*/

console.log(user);

/*
Devuelven lo mismo, pasamos un puntero al mismo sitio:
    mostrarA1(user);
    console.log(user);
*/

