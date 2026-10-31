
document.addEventListener("DOMContentLoaded", function () {

    // Obtener el elemento del año
    const year = document.getElementById("year");

    // Mostrar el año actual
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Obtener el menú de navegación
    const menu = document.getElementById("menu");

    // Cerrar el menú móvil al seleccionar una opción
    if (menu && window.bootstrap) {

        const links = document.querySelectorAll("#menu .nav-link");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                const collapse = bootstrap.Collapse.getInstance(menu);

                if (collapse) {
                    collapse.hide();
                }

            });

        });

    }

});
