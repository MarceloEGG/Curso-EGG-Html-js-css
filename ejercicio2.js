function calcularArea(){
    let radio = document.getElementById("radio").value;
    //console.log (typeof(radio));
    let area = (Math.PI*Math.pow(radio,2));
  
    let resultado = document.getElementById("resultado");
    resultado.textContent = "El area es de: " + area.toFixed(5);
let m=area*2;

}

/*bot.addEventListener('click',function fun() {

    h1.textContent = h1.textContent.length 
})*/