// Seleccionar el botón y agregar el evento de clic
const bot = document.getElementById("bot");
const bot = document.getElementById("bot");
bot.addEventListener('click', verificarEdad());

// Función para verificar la edad
function verificarEdad() {
    const edadUsuario = parseInt(document.getElementById("edadusuario").value);
    const respuesta = document.getElementById("respuesta");

    if (edadUsuario >= 18) {
        respuesta.textContent = "Eres mayor de edad.";
    } else {
        respuesta.textContent = "Eres menor de edad.";
    }
}

addEventListener