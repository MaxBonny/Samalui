/* ==========================================
   PROMPT MAESTRO — VARIEDADES SAMALUI
   ARCHIVO: js/main.js
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // 1. Efecto de barra de navegación al hacer scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.classList.remove('shadow-sm');
            navbar.style.padding = '0.75rem 0';
        }
    });

    // 2. Cerrar el menú desplegable en móviles automáticamente al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });

    // 3. Registro de interacción para enlaces de WhatsApp
    const inquiryButtons = document.querySelectorAll('a[href*="wa.me"]');
    inquiryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('Redirigiendo a WhatsApp de Variedades SAMALUI...');
        });
    });

    console.log('Variedades SAMALUI — Interfaz y scripts inicializados correctamente.');
});