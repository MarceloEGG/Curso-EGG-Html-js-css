const matriz = [[3], [6], [9], [12], [15]];

// Función para sumar el primer elemento a todos los demás elementos
const sumarPrimerElemento = (matriz) => {
  const resultado = matriz.map(subArray => subArray[0] + subArray[0]);
  return resultado;
};

const resultadoArray = sumarPrimerElemento(matriz);

console.log(resultadoArray); // Output: [6, 12, 18, 24, 30]
