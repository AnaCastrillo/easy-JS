// CHANGE COLORS 2
// Ejercicio para practicar
// funciones y eventos
// BONUS (funciones con parametros)

// En este ejercico vamos a hacer que el color, el nombre del color y el color del nombre
// cambien de color cunado pulsemos los botones de los distintos colores

// lo primero de todo, declarar las constantes
// de los elementos que van a cambiar
const block = document.querySelector(".block");
const colorName = document.querySelector(".colorName");

// y de los botones que activan las funciones
const redSelector = document.querySelector(".js-red");
const greenSelector = document.querySelector(".js-green");
const blueSelector = document.querySelector(".js-blue");

// empezamos planteando una función, ¿qué cosas tenemos que cambiar?
// El color de dos objetos y el nombre del color en el HTML, 
// primero lo haremos solo con el rojo
function red(){
  block.classList.add("red");
  colorName.classList.add("red");
  colorName.innerHTML = "red";

  block.classList.remove("green");
  colorName.classList.remove("green");
  block.classList.remove("blue");
  colorName.classList.remove("blue");
}

// y ahora añadiremos el event listener que llame a la función cuando 
// cliquemos el boton rojo
redSelector.addEventListener("click", red);

// tras probar el botón, vamos a hacer lo mismo para el azul
function blue(){
  block.classList.add("blue");
  colorName.classList.add("blue");
  colorName.innerHTML = "blue";

  block.classList.remove("green");
  colorName.classList.remove("green");
  block.classList.remove("red");
  colorName.classList.remove("red");
}

blueSelector.addEventListener("click", blue);

// al probar nos daremos cuenta de que al pulsar el botón rojo, todo bien
// el azul, todo bien; pero al volver a pulsar el rojo... el color no cambia
// esto se debe a que las clases se estan sobre escribiendo unas a otras
// para no tener problemas, vamos añadir a la función que elimine las clases que no necesitamos

// Para terminar, hacemos la función para el verde y su evento

function green(){
  block.classList.add("green");
  colorName.classList.add("green");
  colorName.innerHTML = "green";

  block.classList.remove("blue");
  colorName.classList.remove("blue");
  block.classList.remove("red");
  colorName.classList.remove("red");
}

greenSelector.addEventListener("click", green);

// asegurate de añadir el quitar todas las clases que no usamos en cada funcion
// Y ya estaría!!!




// BONUS
// estas funciones... funcionan. Pero es posible usar muchas menos lineas 
// para ello usaremos los parametros de las funciones
// vamos a empezar comentando las funciones anteriores, para que no nos molesten
// y vamos a descomentar TODAS las lineas que vienen a continuación

// // primero vamos a mirar lo que hemos estado haciendo en las funciones anteriores
// // ¿podemos dividir las acciones en grupos más pequeños?

// // es posible que podamos hacer una división entre lo que añadimos y lo que quitamos
// // igual que antes, empezamos con las cosas que vamos a añadir, las clases y el cambio de HTML
// // vamos a añadir un parametro a la función y
// // escribirlo en vez de el nombre del color
// function add(a) {
//   block.classList.add(a);
//   colorName.classList.add(a);
//   colorName.innerHTML = a;
// }

// // ahora la función para quitar las clases
// // esta vez, con dos parametros, para cada uno de los colores a elimianar
// function remove(a, b){
//   block.classList.remove(a, b);
//   colorName.classList.remove(a, b);
// }

// // pero, ¿cómo llamamos a los colores?
// // con funciones!!
// // empecemos con el rojo
// // dentro de la función para el rojo meteremos las fuciones que acabamos de crear
// // escribiendo "red", "blue" y "green" en lugar de los parametros
// function red(){
//   add("red");
//   remove("blue", "green");
// }

// // añadimos la linea para el evento
// redSelector.addEventListener("click", red);

// // y ya estaría
// // probamos que funciona y hacemos lo que hemos hecho para el roro con los otros colores
// // cambiando los nombres de las clases en el parametro que les corresponda

// function green(){
//   add("green");
//   remove("blue", "red");
// }
// greenSelector.addEventListener("click", green);

// function blue(){
//   add("blue");
//   remove("red", "green");
// }
// blueSelector.addEventListener("click", blue);