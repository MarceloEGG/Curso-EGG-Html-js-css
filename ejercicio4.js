
function comprobar(){
    const verificar = document.getElementById("chiquito");
    const resultado = document.getElementById("resultado");
    if(verificar.value.toLowerCase() === "s" || verificar === "n"){
        return resultado.textContent = "Correcto";
    }else{
        return resultado.textContent = "Incorrecto";
    }
}