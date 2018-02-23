class Main{
    constructor(){
        //cuando termines la carga ejecuta defineListeners -> usando bind this va a ser el objeto y no el documento
        //guardamos el this al que se refiere en ese momento, i.e., el objeto main{}
        document.addEventListener('DOMContentLoaded', this.defineListeners.bind(this),false);
    }

    //defineListeners la ejecuta el sistema, el this no es una referencia al objeto, por eso necesitamos bind
    defineListeners(){
        console.log(this);
        document.querySelector('#btnSaludar').addEventListener('click',this.btnSaludar,false);
        document.querySelector('#btnRegistrar').addEventListener('click',this.btnRegistrar,false);
        document.querySelector('#btnGoogle').addEventListener('click',this.btnGoogle,false);
    }

    //declaramos metodos dentro de la clase:
    btnSaludar(){
        window.alert('Hola a todos');
    }

    btnRegistrar(){
        let user;
            user = window.prompt('Dime tu nombre','Pepe');
    }

    btnGoogle(){
        window.location.href='https://www.google.es';
    }
}

/*
    cuando se termine de cargar la pag instancio un objeto main:
    (function(){
        document.addEventListener('DOMContentLoaded',function(){
            oMain = new Main()
        },false);
    })();
*/

//funcion autoejecutada que instancia un objeto main:
(function(){
    new Main();
})();