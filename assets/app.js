window.onload = function (){
/*Crea una función que busque un elemento en un array, devolviendo su posición (index) e imprima el valor en la consola. Tip: utiliza el algoritmo de linear search. Con este ejercicio introducimos el concepto de algoritmo= conjunto ordenado y finito de operaciones que permiten hallar la solucion de un problema */
/*Algoritmo lineal (linear search) comparar el elemento que buscas con todos los elementos del array, va iternado los elementos del array hasta encontrar lo que busca */

/*BINARY SEARCH es bueno para cuando a busqueda es muy grande*/

//SEARCH

let search = function (array,element) {
  for (var i = 0; i<array.lenght; i++) {
    if (array[i] === element) { //le digo que compare con el elemnto atra vez de ===
      return i 
    } 
  }
}
console.log(search([1,2,3,4,5,6,7,8],7)); //devuelve el 6
console.log(search([1,2,3,4,5,6,7,8],10)); //no encuentra el elemento en el array porque no hay nada que mostrar
}