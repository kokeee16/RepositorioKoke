const promesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("El servidorh ha enviado los datos")
    },2000)

    setTimeout(()=>{
        reject("El servidor ha fallecido")
    },6000)

})

promesa.then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error)
})
console.log("No espera resolver la promesa");