// Función para generar un número aleatorio entre un mínimo y un máximo (ambos inclusive)
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Función para llenar un vector con valores aleatorios
  function llenarVectorAleatorio(vector, longitud, min, max) {
    for (let i = 0; i < longitud; i++) {
      vector.push(generarNumeroAleatorio(min, max));
    }
  }
  
  // Vectores para almacenar los valores aleatorios
  let vector1 = [];
  let vector2 = [];
  
  // Llenar los vectores con valores aleatorios
  llenarVectorAleatorio(vector1, 5, 1, 100); // Llenar con valores entre 1 y 100
  llenarVectorAleatorio(vector2, 5, 50, 200); // Llenar con valores entre 50 y 200
  
  // Mostrar los vectores por pantalla
  console.log("Vector 1:", vector1);
  console.log("Vector 2:", vector2);
  