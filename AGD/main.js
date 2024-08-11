// # 1. VARIABLES
// block scope: alcance dentro del bloque de la variable let
let say = "Hello";
let outer = "una variable externa"; // externa
const noPuedoVariar = "soy una variable constante";

// function scope: alcance dentro y fuera del block
var puedoVariar = "soy una variable global";

if (say === "Hello") {
  let say = "goodbye";
  say = "goodbye 2";
  let inner = "Soy una variable interna";
  //   console.log(inner);
}

// console.log(say);

// # 2. FUNCTIONS
// funcion declarativa
saySomething("vias");

function saySomething(value) {
  console.log(value);
}
// funcion expresiva
let sayNow = (value) => {
  console.log(value);
};
sayNow("muy rapido");

let square = (x) => {
  return x * x;
};
let valor = square(5);
console.log(valor);

let square2 = () => console.log("hola");
square2();
