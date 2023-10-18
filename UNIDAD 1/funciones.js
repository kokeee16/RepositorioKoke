let funccion=function(parametro){
    return parametro+":)";
}

console.log(funccion("Hola"));

// CALLBACK

function getIdentificacion(numero,letra,CALLBACK){
    let getIdentificacion=CALLBACK(numero,letra);
    return identificacion 
}

let formatoNIF=function(numero,letra){
    return numero+"-"+letra;
}

let formatoNIE=function(numero,letra){
    return letra+"-"+numero;

}

console.log(getIdentificacion("24389474","S",formatoNIF));

/*FORMA MAS UTILIZADA DE CALLBACK*/

function getIdentificacion2(numero,letra,CALLBACK){
    let identificacion=CALLBACK(numero,letra);
    return identificacion;
}

getIdentificacion2("45674","R",function(numero,letra){
    console.log(numero+"-"+letra);
    return numero+"-"+letra;

});

//FUNCIONES AUTOINVOCADAS

(function(numero,letra){
    console.log(numero+"-"+letra);
})("866428390","i");