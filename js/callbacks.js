//Funciones callback - pasar una funcion como parametro.
/*Al pasar una funcion como argumento, es una funcion variable.
Pasamos la funcion mostrar como argumento: */

//el nombre de la propiedad puede ir con o sin comillas
function main(mostrar){
    const user = {
        'nombre': 'Pepe',
        apellido: 'Perez',
        edad: 23,
    }
    //salida usando un template string:
    mostrar(`El usuario es
            ${user.nombre} ${user.apellido}`)
}

//si no sabe el valor de pDato nos devuelve el valor por defecto->'No se tu nombre'
function enMayusculas(pDato = 'No se tu nombre'){
    //typeof pDato === string? pDato : 'No se tu nombre';
    console.log(pDato.toUpperCase())
}

function enMinusculas(pDato = 'No se tu nombre'){
    console.log(pDato.toLowerCase())
}

x = function(pDato = 'No se tu nombre'){
    console.log(pDato.toLowerCase());
}

main(enMayusculas);
main(enMinusculas);

//paso la funcion como callback. Dan el mismo resultado:
main(x);
main(pDato => console.log( pDato.toLowerCase() ));