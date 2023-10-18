// ESTRUCTURA DEL CONDICIONAL

const flight= 100;
const hotel= 50;
const tour= 30;
const total = flight+hotel+tour;
const budget=300;
if(budget > total){
    console.log('Si me voy de viaje');

}else if(budget===total){
    console.log('Si pueddo ir,pero muy ajustado');
    
}else{
    console.log('No puedo ir');
}

// OPERADORES TERNARIOS

const result = budget > total ? console.log('Si me voy'):console.log('No me voy');
//constnewresult = budget > total ? tour=50:tour=20;
constnewresult = budget > total ?100:200;

//const num = "30" +3;

const NUM = "30" + 3; 
if (NUM % 2 === 0) {
  console.log(`${NUM} es un número par.`);
} else {
  console.log(`${NUM} no es un número par.`)

}

const cade="En un lugar de La Mancha,de cuyo nombre";
// si la cedan es mas larga de 27 palabras debo cortarla en 27, en caso de que sea menor debo de añadir caracteres
//Realizar todas las comprobaciones posibles para cumplir con las especificaciones
//