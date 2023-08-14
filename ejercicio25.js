function getFormValores() {
    event.preventDefault(); // Evitar que la página se recargue


    let nombreInput = document.getElementsByName("nombre")[0];
    let apellidoInput = document.getElementsByName("apellido")[0];


    let nombre = nombreInput.value;
    let apellido = apellidoInput.value;


    let h1 = document.getElementById("NyA");
    h1.innerHTML = "Nombre: " + nombre + "<br>Apellido: " + apellido;
}