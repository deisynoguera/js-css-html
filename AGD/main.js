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
  console.log(inner);
}

console.log(say);
