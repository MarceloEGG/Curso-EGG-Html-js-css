function verificarParImpar() {
    
    var numero = parseInt(document.getElementById("numero").value);
    var resultadoText = document.getElementById("resultado");

    
    if (numero === 0) {
        resultadoText.textContent = "El número no es par ni impar";
    } else if (numero % 2 === 0) {
        resultadoText.textContent = "El número es par";
    } else {
        resultadoText.textContent = "El número es impar";
    }
}