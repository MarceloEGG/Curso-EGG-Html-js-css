/*Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A
        de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El
        programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
        Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
        ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
        0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
        de 20*/

        let arreglo1=[]
        let arreglo2=[]

      for (let i= 0; i < 50; i++) {
        arreglo1[i]=Math.floor(Math.random()*50);
        
      }
      console.log(arreglo1)

      function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
        }
        arreglo1.sort(compareNumeric);
        console.log(arreglo1);

        arreglo2=arreglo1.slice(0,10);
        console.log(arreglo2);
        for (let i= 10; i < 20; i++) {
            arreglo2[i]=0.5;
            
          }
          console.log(arreglo2)