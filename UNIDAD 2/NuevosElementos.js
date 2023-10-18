// 0. Creamos el contenedor
const contenedor=document.querySelector(".container");

 // 1. Creamos el nuevo elemento
const nuevo_div=document.createElement("div");

 // 2. Creamos el nodo texto
 let nodotexto=document.createTextNode("Esto es el nodo texto")

 // 3. Añadimos el nodo texto dentro del div
 nuevo_div.appendChild(nodotexto);

 console.log(nuevo_div);

 const encabezado=document.createElement("h1");
 nodotexto=document.createTextNode("Título de la Página");
 encabezado.appendChild(nodotexto);

 contenedor.appendChild(encabezado);
 contenedor.appendChild(nuevo_div);

function addElement(){
    let newDiv=document.createElement("div");
    let nexContent=document.createTextNode("Hola,que tal");

    newDiv.appendChild(nexContent);
    let currentDive=document.getElementById("div1");
    document.body.insertBefore(newDiv,currentDive);

}