document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const toggleIcon = menuToggle.querySelector('i');

    menuToggle.addEventListener('click', () => {
        // Alterna la clase active para desplegar o esconder el menú
        navMenu.classList.toggle('active');

        // Cambio dinámico de icono: Hamburguesa <-> Equis (X)
        if (navMenu.classList.contains('active')) {
            toggleIcon.classList.remove('fa-bars');
            toggleIcon.classList.add('fa-xmark');
        } else {
            toggleIcon.classList.remove('fa-xmark');
            toggleIcon.classList.add('fa-bars');
        }
    });

    // Cerrar el menú automáticamente si se hace clic en un enlace (Modo Móvil)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                toggleIcon.classList.remove('fa-xmark');
                toggleIcon.classList.add('fa-bars');
            }
        });
    });
});