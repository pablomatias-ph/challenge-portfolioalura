//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega
// Menú hamburguesa
const hamburguesa = document.getElementById('hamburguesa');
const navegacion = document.getElementById('navegacion');

hamburguesa.addEventListener('click', () => {
    navegacion.classList.toggle('navegacion-activa');
});

// Validación del formulario
const formulario = document.querySelector('.contacto__formulario');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();  

    const nombre = document.querySelector('input[name="nombre"]');
    const email = document.querySelector('input[name="email"]');
    const mensaje = document.querySelector('textarea[name="mensaje"]');
    let valido = true;

    if (nombre.value.trim() === '') {
        alert('Por favor, ingresa tu nombre.');
        valido = false;
    }

    if (!validarEmail(email.value)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        valido = false;
    }

    if (mensaje.value.trim() === '') {
        alert('Por favor, ingresa un mensaje.');
        valido = false;
    }

    if (valido) {
        formulario.submit();  
    }
});

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}