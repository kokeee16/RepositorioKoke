document.addEventListener("DOMContentLoaded", function (evento) {

    const usuario = document.getElementById(`uname`);
    const clave = document.getElementById(`pwd`);
    const from = document.querySelector(`form`);

    this.forms.addEventListener('submit', validarFormulario);

    usuario.addEventListener("keyup", function (e) {
        console.log("ha cambiado");
        if (this.value) {
            this.setCustomValidity("");
        } else {
            this.setCustomValidity("campo vacio");
        }
    })

    clave.addEventListener("keyup", function (e) {
        console.log("ha cambiado");
        if (this.value.length >= 6) {
            this.setCustomValidity("");
        } else {
            this.setCustomValidity("Menor de 6 caracteres");
        }

    })

    function validaFormulario(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        let valido = true;
        if (!usuario.value) {
            usuario.setCustomValidity("Campo vacio");
            valido = false;
        } else {
            usuario.setCustomValidity("");
        }
        if (clave.length < 6) {
            clave.setCustomValidity("Menor de 6 caracteres");
            valido = false;
        } else {
            clave.setCustomValidity("");
        }

        //CLASE DE BOOTSTRAP
        this.classList.add("was-validated");
        if (valkido) {
            this.submit;
        } else {
            usuario.setCustomValidity(" ");
        }
    }
})