const radio = prompt('Introduce el radio del circulo');
const alerta=document.querySelector(".alert");
if(!isNaN(radio)){
    let area=Math.PI * Math.pow(radio,2);
    area=area.toFixed(2);
    alerta.innerHTML=`El área del círculo de radio ${radio} es ${area}`;
}else{
    alert.classList=`alert alert-danger`
    alert.innerHTML = `No has introducido un numero`
}