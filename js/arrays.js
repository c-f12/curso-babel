//Dos formas de crear un array:
//Los dos son un objeto del tipo array:
let aDatos = new Array(21,34,56,12);
let aNombre = ['Pepe', 'Juan', 'Luis',33];

/*
console.log(typeof aDatos);
console.log(typeof aNombre);

//todos los arrays tienen la propiedad length:
console.log(aDatos.length);
console.log(aNombre.length);

//misma manera pero mejor hacer push.
aDatos[aDatos.length] = 65;
console.log(aDatos);

aDatos.push(65);
console.log(aDatos);
*/

//Hay programacion imperativa y declarativa:

//Procesamiento imperativo
let suma = 0;
for (let i = 0; i < aDatos.length; i++) {
    suma += aDatos[i];
}
console.log(suma);


//la funcion map por cada item q recibe devuelve el item aumentado en 1
//la funcion forEach ejecuta el callback que le des y va pasando los elementos del array

//funciones declarativas(map,filter y forEach):
let map1 = aDatos.map(item => ++item);
console.log(map1)

aDatos = aDatos.filter(item => {return (item>50)});

//forEach hace lo mismo que el bucle:
let suma2 = 0;
aDatos.forEach( (item) => {suma2 += item})
console.log(suma2);