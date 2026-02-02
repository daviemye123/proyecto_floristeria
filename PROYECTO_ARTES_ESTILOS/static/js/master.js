document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.dropdown-trigger');
        const menu = dropdown.querySelector('.dropdown-content');

        if (!trigger || !menu) return;

        trigger.addEventListener('click', function(e) {
            e.preventDefault(); // Evita que el enlace recargue la página
            e.stopPropagation();
            
            // Cerramos otros menús abiertos para que solo haya uno a la vez
            document.querySelectorAll('.dropdown-content').forEach(otherMenu => {
                if (otherMenu !== menu) otherMenu.classList.remove('show');
            });

            // Alternamos el menú actual
            menu.classList.toggle('show');
        });
    });

    // Cerrar el menú si el usuario hace clic fuera de él
    window.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-content').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });

    // ===== Menu burger (mobile) =====
    const burger = document.querySelector('.menu-burger');
    const navLinks = document.querySelector('.nav-links');

    if (burger && navLinks) {
        burger.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('open');
        });

        // Close nav when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.nav-links') && !e.target.closest('.menu-burger')) {
                navLinks.classList.remove('open');
            }
        });
    }
});