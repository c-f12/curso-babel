//función anónima - con () al final la ejecutamos
//closure - funcion anonima que se autoejecuta y aisla del entorno global
//los eventos del sistema los controla el sistema operativo y los gestiona el navegador
//el sistema operativo avisa al nav

//lo dispara el evento document(el document avisa cuando se ha cargado) y lo gestiona el evento DOMContentLoaded
//document -> DOMContentLoaded
//window -> load
(function(){
    //escucha y cuando document dispare el evento DOMContentLoaded haz lo que te digo a continuación, en este caso iniciar la funcion main
    //el false se refiere al burbujeo de los eventos:
    //documento load y window load se ejecutan a la vez
    //document es un objeto - esperamos a que se cargue
    document.addEventListener('DOMContentLoaded',main,false);
   //window.addEventListener('load',main,false);
})();

//Acceso al DOM -Document Object Model
//document es el arranque de todo el DOM
//crea un puntero al elemento del DOM para que podamos manipularlo
//API de query selector - más nuevo:
    //document.getElementById() - más antiguo.

//querySelector - selecciona el 1º que encuentre:
    //en querySelector puedes poner todo lo que pongamos en css.Devuelve un objeto de tipo input:
        document.querySelector('input');
    //querySelectorAll - selecciona todos los que encuentre. Devuelve un array:
        document.querySelectorAll('button')[0]; //ponemos 0 para seleccionar el primero.


//Gestión de eventos
function main(){
    console.log('documento cargado');
    console.dir(window);
    console.dir(document.querySelector('#btnSaludar'));
    console.dir(document.querySelector('#btnRegistrar'));
    //onclick version antigua, addEventListener - actual:
    document.querySelector('#btnSaludar').addEventListener('click',btnSaludar,false);
    document.querySelector('#btnRegistrar').addEventListener('click',btnRegistrar,false);
    document.querySelector('#btnGoogle').addEventListener('click',btnGoogle,false);
}

//DOM - (object)
//BOM - Browser Object Model (window)
function btnSaludar(){
    //window.alert o alert es lo mismo
    window.alert('Hola a todos');
}

function btnRegistrar(){
    let user;
                //prompt - pasamos mensaje y valor por defecto
        user = window.prompt('Dime tu nombre','Pepe');
}

function btnGoogle(){
    //window.location.href te devuelve la url de tu pag
    window.location.href='https://www.google.es';
}

/* document.getElementById('btn1').onclick = btnEventClick;
document.getElementById('btn2').addEventListener('click',btnEventClick, false); */