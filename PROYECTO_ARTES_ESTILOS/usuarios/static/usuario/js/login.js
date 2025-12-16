const wrapper = document.querySelector('.wrapper');
const bannerTitle = document.getElementById('banner-title');
const bannerText = document.getElementById('banner-text');
const container = document.querySelector('.container');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');

showRegister.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.add('register-active');''
});

showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.remove('register-active');
});

// Ejemplo de cómo obtener el rol seleccionado al registrarse (esto es solo un ejemplo)
document.querySelector('.register-form .submit').addEventListener('click', (e) => {
    e.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    const rolSeleccionado = document.getElementById('register-rol').value;
    console.log('Rol seleccionado al registrarse:', rolSeleccionado);

    // Aquí iría tu lógica para enviar los datos del formulario (incluyendo el rol) al backend
    // para crear la cuenta del usuario.
});