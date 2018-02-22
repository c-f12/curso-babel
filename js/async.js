/* Asincronía. La encontramos en:
 - Eventos de usuario
 - Llamadas al servidor - datos del servidor (AJAX)
 - Temporización
*/

//interval lo va a repetir cada cierto tiempo:
//setInterval()

//lo ejecuta una vez:
//podemos ponerle la funcion callback como argumento y como funcion anonima o pasarle el nombre de una funcion y declararla mas abajo
/*
let x = 12;

setTimeout(
    () => {console.log('Hola asincrono')
    x = 2*x;
    console.log(x);
    },1000);
    
console.log(x);
*/


//En ES6:

const consulta = function(){
        return new Promise( (resolve, reject) => {
        setTimeout(() => {resolve('Todo ok')}, 2000)
    })
}

//usar then para mostrar lo que quiero que pase y catch lo que quiero que pase si ha ido mal
let resultados = 
consulta().then( (res) => {console.log(res)})


