/*Escribir un programa para obtener un array de las propiedades de un objeto Persona.
Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.*/
let persona = {
    nombre: 'Juan',
    edad: 30,
    sexo: 'H',
    peso: 70,
    altura: 175
  };
  
  let arrayPersona = Object.keys(persona);
  
  console.log(arrayPersona);