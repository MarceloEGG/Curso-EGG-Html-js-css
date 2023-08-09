
let frase = prompt("Ingrese una frase");

      let alRevez = (frase) => {
        let resultado = "";

        for (let i = frase.length - 1; i >= 0; i--) {
          resultado += frase.substring(i, i + 1);
        }
        return resultado;
      };

      console.log(alRevez(frase));