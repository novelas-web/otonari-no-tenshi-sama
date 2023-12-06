document.addEventListener('DOMContentLoaded', function () {
    var enlaceCambiarModo = document.getElementById('cambiarModo');
    var enlaceCSS = document.getElementById('estilosCSS');

    // Agregar un event listener al enlace
    enlaceCambiarModo.addEventListener('click', function () {
        // Obtener el atributo href actual
        var hrefActual = enlaceCSS.getAttribute('href');

        // Verificar el modo actual y cambiar al contrario
        if (hrefActual === 'css/base.css') {
            enlaceCSS.setAttribute('href', 'css/dark.css');
        } else {
            enlaceCSS.setAttribute('href', 'css/base.css');
        }
    });
});
