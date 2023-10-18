//El alcance de las variables
//var es accesible desde cualquier scope
//let y const solo son visibles desde el scope definido
//const no puede modificar su valor

let adios="Hasta la vista";
const algo="Algo";
if(true){
    var hola ="Hello,";
}
console.log("var: "+hola);
console.log("let: "+adios)
console.log("const: "+algo);

adios="Sayonara bby";
console.log("let: "+adios);