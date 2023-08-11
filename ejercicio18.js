let valores = [true, 5, false, "hola", "adios", 2];
//a) Determinar cual de los dos elementos de texto es mayor
let aux=""
valores.forEach(element => {
    if (typeof element === "string" && element.length > aux.length){
        aux=element
    }

});
console.log(aux)

/*b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
        operadores necesarios para obtener un resultado true y otro resultado false*/
let aux2=[]
        valores.forEach(element => {
            if (typeof element === "boolean") {
            aux2.push(element);
            }
        
        });

        console.log(aux2)
        for (let i = 0; i < aux2.length; i++) {
            if (aux2[i] === true){ 
        
                console.log(aux2)
            }
        }

        /*c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
        dos elementos numéricos*/
let aux3=[]
valores.forEach(element => {
    if (typeof element === "number" ){
        aux3.push(element)

    }
console.log(aux3)
});

const sumar = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
const multi = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;
const resultado = sumar(aux3[0],aux3[1]);
const resultado1 = resta(aux3[0],aux3[1]);
const resultado2 = multi(aux3[0],aux3[1]);
const resultado3 = div(aux3[0],aux3[1]);
console.log(resultado); 
console.log(resultado1); 
console.log(resultado2); 
console.log(resultado3); 