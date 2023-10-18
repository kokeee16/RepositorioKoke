const alerta = document.querySelector(".alert-info strong");
console.log(alerta);

const radio = 1;
let area = Math.PI * Math.pow(radio,2);
area = area.toFixed(2);
alerta.innerHTML = `Un círculo con radio = ${radio} tiene ${area} metros cuadrados`;