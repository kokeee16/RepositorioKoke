$(function() {
    // Para cada campo de contraseña con el atributo data-eye
	$("input[type='password'][data-eye]").each(function(i) {
		var $this = $(this),
			id = 'eye-password-' + i,
			el = $('#' + id);

        // Envuelve el campo de contraseña en un div con posición relativa
		$this.wrap($("<div/>", {
			style: 'position:relative',
			id: id
		}));

        // Añade estilos al campo de contraseña para permitir espacio para el botón "Show"
		$this.css({
			paddingRight: 60
		});

        // Añade un botón "Show" como un div adicional
		$this.after($("<div/>", {
			html: 'Show',
			class: 'btn btn-primary btn-sm',
			id: 'passeye-toggle-'+i,
		}).css({
			position: 'absolute',
			right: 10,
			top: ($this.outerHeight() / 2) - 12,
			padding: '2px 7px',
			fontSize: 12,
			cursor: 'pointer',
		}));

        // Añade un campo de entrada oculto adicional para almacenar el valor de la contraseña
		$this.after($("<input/>", {
			type: 'hidden',
			id: 'passeye-' + i
		}));

        // Clona cualquier mensaje de retroalimentación inválido asociado al campo de contraseña
		var invalid_feedback = $this.parent().parent().find('.invalid-feedback');
		if (invalid_feedback.length) {
			$this.after(invalid_feedback.clone());
		}

        // Establece un evento en el campo de contraseña para actualizar el valor del campo oculto
        // a medida que se escribe o pega en el campo de contraseña
		$this.on("keyup paste", function() {
			$("#passeye-"+i).val($(this).val());
		});

        // Establece un evento en el botón "Show" para alternar entre mostrar y ocultar la contraseña
		$("#passeye-toggle-"+i).on("click", function() {
			if($this.hasClass("show")) {
				$this.attr('type', 'password');
				$this.removeClass("show");
				$(this).removeClass("btn-outline-primary");
			} else {
				$this.attr('type', 'text');
				$this.val($("#passeye-"+i).val());				
				$this.addClass("show");
				$(this).addClass("btn-outline-primary");
			}
		});
	});

    // Establece un evento en la presentación del formulario para la validación
	$(".my-login-validation").submit(function(event) {
		event.preventDefault();

		var form = $(this);
        // Verifica la validez del formulario
		if (form[0].checkValidity() === false) {
			event.stopPropagation();
			form.addClass('was-validated');
		} else {
            // Simula la autenticación exitosa
			var fakeAuthentication = true;

			if (fakeAuthentication) {
                // Redirige a la página de blog si la autenticación es exitosa
				window.location.href = "blog.html";
			} else {
                // Muestra una alerta si la autenticación falla
				alert("Autenticación fallida. Verifica tus credenciales.");
			}
		}
	});
});
