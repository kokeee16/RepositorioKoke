window.addEventListener("DOMContentLoaded", function(evento) {
    const email = document.querySelector("#email");
    const formulario = document.querySelector("#formulario");
    const cp = document.querySelector("#cp");

    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();
        evento.stopPropagation();

        let valido = true;
        if (!validarEmail(email)) {
            valido = false; // Cambiado de validar a valido
        }

        if (!validarCP(cp)) {
            valido = false; // Cambiado de validar a valido
        }

        if (valido) {
            this.submit();
        }

        function validarEmail(e1) {
            const erMail = /^[-\w.%+]+@(?:[A-Z0-9-]+.)+[A-Z]{2,63}$/i; // Corregido el error en la expresión regular
            if (erMail.test(e1.value.trim())) { // Corregido el if statement
                marcarValido(e1);
                return true;
            } else {
                marcarError(e1, "El email no tiene un formato válido");
                return false;
            }
        }

        function validarCP(e1) {
            const erCP = /^[0-5][0-9]{3}$/i; // Corregido el error en la expresión regular
            const cpvalue = e1.value.trim();
            if (erCP.test(cpvalue)) { // Corregido el if statement
                marcarValido(e1);
                return true;
            } else {
                marcarError(e1, "El código Postal no es correcto");
                return false;
            }
        }

        function marcarError(e1, mensaje) {
            e1.parentNode.querySelector(".error-feedback").textContent = mensaje;
            e1.parentNode.classList.add("error");
        }

        function marcarValido(e1) {
            e1.parentNode.querySelector(".error-feedback").textContent = " ";
            e1.parentNode.classList.remove("error");
        }
    });
});