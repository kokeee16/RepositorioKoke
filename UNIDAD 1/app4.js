/* OPERACIONES CON CADENAS DE TEXTOS*/


//cONCATENAR TEXTO
let nombre="Pepe";
let apellido="Mosca";
let nombre_completo=nombre+'  '+apellido;
console.log(nombre_completo);

//Template literals
let curso='VS2DAW';
nombre_completo=`Hola ${nombre} ${apellido}`;
console.log(nombre_completo);
let saludo=`Hola ${nombre} ${apellido}, bienvenido al curso ${curso}`;
console.log(saludo);

//Length 
console.log(nombre.length);

//.includes(subacena)
console.log(saludo.includes('bien55is'));

//.slice(start, end)

console.log(saludo.slice(12,17));
//.replace("este texto", "por este otro")
console.log(saludo.replace('Pepe', 'Fernando'));

//.trim
let cadena='        hola      mundo     ';
console.log(cadena.trim());