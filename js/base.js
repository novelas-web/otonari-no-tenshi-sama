document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los enlaces con la clase "abrir"
    var enlacesAbrir = document.querySelectorAll('section.cuerpo a');

    // Iterar sobre cada enlace
    enlacesAbrir.forEach(function (enlace) {
        // Agregar un event listener a cada enlace
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

                    // Verificar si el enlace tiene un atributo title
                    var h1Contenido = enlace.getAttribute('title');

                    // Crear un elemento h1 si se especificó el título
                    if (h1Contenido) {
                        var primerEncabezado = document.createElement('h1');
                        primerEncabezado.textContent = h1Contenido;
                        nuevoDiv.appendChild(primerEncabezado);
                    }

                    // Crear párrafos para todas las líneas y agregarlos al div
                    for (var i = 0; i < lineas.length; i++) {
                        var parrafo = document.createElement('p');
                        parrafo.textContent = lineas[i];
                        nuevoDiv.appendChild(parrafo);
                    }

                    // Agregar el div al contenedor
                    contenedor.appendChild(nuevoDiv);

                    // Crear el enlace para cerrar el div
                    var zelda = document.createElement('a');
                    zelda.href = 'javascript:void(0)';
                    zelda.textContent = 'X';
                    zelda.onclick = cerrar; // Asociar la función cerrar al evento onclick

                    // Agregar el enlace secundario al contenedor
                    contenedor.appendChild(zelda);
                })
                .catch(error => {
                    console.error('Error al cargar el archivo:', error);
                });
        });
    });

    // Obtener el contenedor
    var contenedor = document.getElementById('contenedor');

    // Función para cerrar y eliminar el contenido del contenedor
    function cerrar() {
        contenedor.innerHTML = ''; // Eliminar todo el contenido del contenedor
    }
});
