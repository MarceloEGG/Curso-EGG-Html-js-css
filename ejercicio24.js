const boton=document.getElementById("bot");
const diametro=document.getElementById("diametro");
const area=document.getElementById("area");
const perimetro=document.getElementById("perimetro");
const radio=document.getElementById("radio");

function calcularRadio(){
   let diametro2 = parseInt(diametro.value) ;
   let radio2 = diametro2/2;
   
console.log(radio2);
radio.innerHTML = "Radio: " + radio2;
return radio2;

}

function calcularArea(radio){
   let area2 = Math.PI*Math.pow(radio,2);
   console.log(area2) 
   area.innerHTML="Area : "+area2
}
function calcularPerimetro(radio) {
   let perimetro2 = 2 * Math.PI * radio;
   console.log(perimetro2);
   perimetro.innerHTML = "Perímetro: " + perimetro2;
}

boton.addEventListener("submit", function(event) {
   event.preventDefault(); 

   let r = calcularRadio();
   calcularArea(r);
   calcularPerimetro(r);
});