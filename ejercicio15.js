
function calcularPerimetro(){
    let radio=parseInt(document.getElementById("radio").value);
    

let resultado = document.getElementById("perimetro");
resultado.innerHTML = Math.PI*radio;
console.log(resultado)
}

function calcularArea(){
    let radio=parseInt(document.getElementById("radio").value);
    let resultado = document.getElementById("Area");
    resultado.innerHTML= Math.PI* Math.pow(radio,2);

console.log(resultado)
}