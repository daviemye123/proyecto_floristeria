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

document.querySelector('.register-form .submit').addEventListener('click', (e) => {
    e.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    const rolSeleccionado = document.getElementById('register-rol').value;
    console.log('Rol seleccionado al registrarse:', rolSeleccionado);

});