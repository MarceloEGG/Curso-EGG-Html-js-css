

let parrafo = document.getElementById("parrafo");
console.log(parrafo)
let palabras = parrafo.textContent.split(" ");

function resaltar(){

    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length >= 8) {
            palabras[i] = '<span style="background-color: yellow;">' + palabras[i] + '</span>';
        }
    }

    parrafo.innerHTML = palabras.join(" ");
}
document.getElementById("bot").addEventListener("click",  resaltar);
