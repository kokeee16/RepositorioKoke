window.addEventListener("load", function () {
    const formulario = document.querySelector("#formulario");
    const usuario = document.querySelector("#user");
    const passwd = document.querySelector("#passwd");
    const newPasswd = document.querySelector("#newpasswd");
    const fechaNac = document.querySelector("#fechaNac");
    const condiciones = document.querySelector("#condiciones");
    let valido = true; // Declare the valido variable

    formulario.addEventListener("submit", evento => {
        evento.preventDefault();
        evento.stopPropagation();
        valido = true; // Initialize valido to true

        if (!validarUser(usuario)) {
            valido = false;
        }

        if (!validarPasswd(passwd)) {
            valido = false;
        }

        if (!validarPasswd2(newPasswd, passwd)) {
            valido = false;
        }

        if (!validarFecha(fechaNac)) {
            valido = false;
        }

        if (!validarCheck(condiciones)) {
            valido = false;
        }

        if (valido) {
            formulario.submit();
        }
    });

    function validarUser(e1) {
        if (!e1.value) {
            marcarError(e1, "No has introducido el usuario");
            return false;
        } else {
            marcarValido(e1);
            return true;
        }
    }

    function validarPasswd(e1) {
        if (e1.value.length < 7) {
            marcarError(e1, "El password debe tener 7 caracteres");
            return false;
        } else {
            marcarValido(e1);
            return true;
        }
    }

    function validarPasswd2(newPasswd, oldPass) {
        if (newPasswd.value === oldPass.value) { // Use === for comparison
            marcarValido(newPasswd);
            return true;
        } else {
            marcarError(newPasswd, "Las contraseñas no coinciden");
            return false;
        }
    }

    function validarCheck(e1) { // Fix the parameter name here
        if (e1.checked) {
            marcarValido(e1);
            return true;
        } else {
            marcarError(e1, "No has marcado el check");
            return false;
        }
    }

    function validarFecha(e1) {
        if (!e1.value) { // Add the parameter to the marcarError call
            marcarError(e1, "No has introducido la fecha");
            return false;
        } else {
            marcarValido(e1);
            return true;
        }
    }

    function marcarError(e1, mensaje) {
        e1.parentNode.querySelector(".error-feedback").textContent = mensaje;
        e1.parentNode.classList.add("error"); // Remove the dot before "error"
    }

    function marcarValido(e1) {
        e1.parentNode.querySelector(".error-feedback").textContent = " ";
        e1.parentNode.classList.remove("error"); // Remove the dot before "error"
    }
});