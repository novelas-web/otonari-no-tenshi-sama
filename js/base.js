document.addEventListener('DOMContentLoaded', function () {
    // Obtener el enlace y el contenedor
    var enlace = document.getElementById('miEnlace');
    var contenedor = document.getElementById('contenedor');

    // Agregar un event listener al enlace
    enlace.addEventListener('click', function (event) {
        // Prevenir la acción por defecto del enlace (navegar a otra página)
        event.preventDefault();

        // Crear el div y añadirle la clase
        var nuevoDiv = document.createElement('div');
        nuevoDiv.classList.add('miDiv');

        // Obtener la ruta del archivo desde el atributo href del enlace
        var rutaArchivo = enlace.getAttribute('href');

        // Realizar una petición para obtener el contenido del archivo
        fetch(rutaArchivo)
            .then(response => response.text())
            .then(textoArchivo => {
                // Dividir el contenido en líneas
                var lineas = textoArchivo.split('\n');

                // Crear párrafos y agregarlos al div
                lineas.forEach(function (linea) {
                    var parrafo = document.createElement('p');
                    parrafo.textContent = linea;
                    nuevoDiv.appendChild(parrafo);
                });

                // Agregar el div al contenedor
                contenedor.appendChild(nuevoDiv);

                // Crear el enlace secundario y añadirle la clase
                var enlaceSecundario = document.createElement('a');
                enlaceSecundario.href = '#'; // Puedes ajustar la URL según tus necesidades
                enlaceSecundario.classList.add('enlaceSecundario');
                enlaceSecundario.textContent = 'X';

                // Agregar el enlace secundario al contenedor
                contenedor.appendChild(enlaceSecundario);
            })
            .catch(error => {
                console.error('Error al cargar el archivo:', error);
            });
    });
});
