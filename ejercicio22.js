

const boton = document.getElementById('bot');
const mensajeH1 = document.getElementById('mensajeH1');

function mensaje() {  
    mensajeH1.textContent = '¡Botón clickeado! Mensaje .este framework esta loco';
}

boton.addEventListener('click', mensaje);


