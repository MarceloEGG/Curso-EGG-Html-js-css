const matriz = [[3], [6], [9], [12], [15]];


const sumarPrimerElemento = (matriz) => {
  const resultado = matriz.map(subArray => subArray[0] + subArray[0]);
  return resultado;
};

const resultadoArray = sumarPrimerElemento(matriz);

console.log(resultadoArray); 
