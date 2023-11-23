window.addEventListener("load", e => {
    
    // Vamos a cambiar el estilo del elemento con clase navbar-brand
    const brand = document.getElementsByClassName("navbar-brand");
    console.log(brand);

    // Lo siguiente daría error ya que lo que devuelve getElementsByClassName
    // es una colección
    // brand.style.color = "red";
    // habría que acceder al primer elemento como veremos en el siguiente ejemplo
    brand[0].style.color = "red";

    
})

//Jorge Seguido Román, 2 min
window.addEventListener("load", e => {
    
    // Vamos a cambiar el estilo del elemento con clase navbar-brand
    const brand = document.getElementsByClassName("navbar-brand");
    console.log(brand);

    // Lo siguiente daría error ya que lo que devuelve getElementsByClassName
    // es una colección
    // brand.style.color = "red";
    // habría que acceder al primer elemento como veremos en el siguiente ejemplo
    brand[0].style.color = "red";

    // Seleccionamos el elemento a dentro de div.jumbotron
    const btnJumbo = document.querySelector(".jumbotron a.btn-primary");
    // Le quitamos y le ponemos una clase
    btnJumbo.classList.remove("btn-primary");
    btnJumbo.classList.add("btn-danger");

    // Seleccionamos todos los elementos a con clase btn-secondary dentro de elemtnos de la clase .col-md-6
    const btnCols = document.querySelectorAll(".col-md-6 a.btn-secondary");

    // Si queremos hacer algo contodos los elementos de la colección habría que recorrerlos
    btnCols.forEach(element => {
        element.classList.remove("btn-secondary");
        element.classList.add("btn-danger");
    });

    const cols = document.querySelectorAll(".col-md-6");

    // Accedo al tercer elemento y le cambio el estilo a mano
    cols[4].style.backgroundColor = "#FE9";
    cols[5].style.backgroundColor = "#FE9";

    // Recorremos todos los elementos
    cols.forEach(element => {
        // Le asignamos un evento click a cada uno de ellos
        element.addEventListener("click", function (e){
            element.classList.toggle("marcar");
        });
    });

})
