/*Escribir una función que reciba un String y devuelva la palabra más larga.
String Ejemplo: “Guia de JavaScript”
Resultado esperado : “JavaScript”*/

let frase = prompt("Escriba una frase");

function devolver(frase) {
  let palabra = frase.split(" ");

  let max = "";

  //console.log(palabra);
  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i].length > max.length) {
      max = palabra[i];
    }
  }

  return max;
}

console.log(devolver(frase));