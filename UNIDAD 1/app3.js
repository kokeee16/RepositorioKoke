// typeoff
const num=20;
console.log("El tipo es: "+typeof num);
// Nan
const variable =4* "hola";
console.log(variable);
console.log("El tipo de variable es: "*variable);
//Infinity
const division=4/0;
console.log(division);
console.log("El tipo de division es: "+typeof division);
//isNaN
const numberstring="30";
const string="20 años";
console.log(isNaN(variable));
console.log(isNaN(division));
console.log(isNaN("12"));
console.log(isNaN(12));
console.log(isNaN(numberstring));
console.log(isNaN(string));
console.log(isNaN(NaN));
//toString
const number = 100;
console.log(number);
console.log(number.toString());
console.log(typeof number);
console.log(typeof number.toString);
//toFixed
console.log(number.toFixed(2));

//Realizar un script que calcule cuanto toca pagar a cada persona de una cena que cuesta 102€ y asistieron 6 perosnas

const costeCena = 102;
const numPersonas= 6;
const pagaPorPersona= costeCena/numPersonas;

console.log(pagaPorPersona);

//Funcion Boolean devuekve verdadero
console.log(Boolean(0));
console.log(Boolean("cosa"));
console.log(Boolean(3.14));
console.log(Boolean(100>5));
console.log('1'==1);
console.log(Boolean(undefined));