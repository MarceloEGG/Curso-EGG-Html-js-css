


function suma() {
    let num1 = parseInt(document.getElementById("numero1"));
    let num2 = parseInt(document.getElementById("numero2"));
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = (num1 + num2);
}
function resta() {
    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = (num1 - num2);
}
function divi() {
    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = (num1 / num2);
}
function multi() {
    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = (num1 * num2);
}