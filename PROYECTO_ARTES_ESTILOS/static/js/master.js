// static/js/master.js

document.addEventListener('DOMContentLoaded', function() {
    // 1. Seleccionamos todos los botones que activan el menú
    const triggers = document.querySelectorAll('.dropdown-trigger');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            // Evitamos que el clic cierre el menú inmediatamente
            e.stopPropagation();
            
            const parent = this.parentElement;

            // Cerramos otros menús abiertos para que solo haya uno a la vez
            document.querySelectorAll('.nav-item-container').forEach(container => {
                if (container !== parent) {
                    container.classList.remove('active');
                }
            });

            // Alternamos la clase 'active' en el contenedor actual
            parent.classList.toggle('active');
        });
    });

    // 2. Cerrar el menú si el usuario hace clic fuera de él
    document.addEventListener('click', function() {
        document.querySelectorAll('.nav-item-container').forEach(container => {
            container.classList.remove('active');
        });
    });
});