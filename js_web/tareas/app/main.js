class Main{
    constructor(){
        this.user = {
            nombre: localStorage.getItem('nombre'),
        },
        this.tarea = "",
        //this.aTareas = [],

        //transformo la cadena JSON en un array:
        this.aTareas = JSON.parse(localStorage.getItem('tareas')) ? JSON.parse(localStorage.getItem('tareas')) : [],
        this.vista = {
            btnReg: document.querySelector('#btnRegistrar'),
            inNombre: document.querySelector('#nombre'),
            resultado: document.querySelector('#resultado'),
            inTarea: document.querySelector('#tarea'),
            btnAdd: document.querySelector('#btnAdd'),
            tareas: document.querySelector('#tareas'),
        }

        this.vista.btnReg.addEventListener('click',this.btnRegistrar.bind(this),false);
        this.vista.btnAdd.addEventListener('click',this.btnAdd.bind(this),false);
        this.mostrarNombre();
        this.mostrarTareas();
    }

    btnRegistrar(){
        console.log(this);
        this.user.nombre = this.vista.inNombre.value;
        localStorage.setItem('nombre',this.user.nombre);
        this.mostrarNombre();
        //console.log(this.user.nombre);
        //this.vista.resultado.innerHTML = `<p>Hola ${this.user.nombre}</p>`;
        //this.vista.resultado.className = 'rojo';
        //this.vista.resultado.add('rojo');
        //this.vista.resultado.classList.toggle('rojo');
    }

    mostrarNombre(){
        if(this.user.nombre){
            console.log(this.user.nombre);
            this.vista.resultado.innerHTML = `<p>Hola ${this.user.nombre}</p>`;
            this.vista.resultado.classList.toggle('rojo');
        }
    }

    btnAdd(){
        this.tarea = this.vista.inTarea.value;
        this.aTareas.push(this.tarea);
        //lo convierto en JSON:
        localStorage.setItem('tareas',JSON.stringify(this.aTareas));
        this.mostrarTareas();
    }

    mostrarTareas(){
        if(this.aTareas.length){
            let lista;
            lista = '<ul>';
            this.aTareas.forEach(item=>lista+=`<li>${item}</li>`);
            lista += '</ul>';
            this.vista.tareas.innerHTML = lista;
        }
    }
}


(function(){//añadimos el add event listener aqui para que cuando se instancie el objeto ya este todo cargado
    document.addEventListener('DOMContentLoaded', () => new Main(),false);
})();