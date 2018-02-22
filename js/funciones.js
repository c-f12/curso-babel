//declaración de una función:
function mostrar1(pData){
    /* console.log(pData); */
    console.log(nombre);

    {
        let localEdad = 23;
        const año = 2018;
        console.log(localEdad);
        //año++ falla porq año es constante;
        console.log(año);
    }
}

//asignación de una función:
var mostrar2 = function(pData1, pData2){
    console.log(pData1, pData2);
    //console.log(localEdad); --> da error.
}

//dos formas de crear un objeto:
/* var oDatos = new Object();
var oDatos2 = {}; */

//ARROW FUNCTIONS
 var mostrarA1 = pData1 => console.log(pData1,pData2);

 var nombre = 'Pepe';
 var apellidos = 'Perez';
 
 mostrar1(nombre);
 mostrar2(nombre, apellidos);

  /*devuelve que es una funcion,
   pero no es del todo cierto, es un objeto. pero viene bien para
    saber si te ha devuelto un objeto o una funcion
   */ 
 console.log(typeof mostrar1);