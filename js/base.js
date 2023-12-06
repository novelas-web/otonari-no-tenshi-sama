document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los enlaces con la clase "abrir"
    var enlacesAbrir = document.querySelectorAll('a.abrir');

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

                    // Crear un elemento h1 para la primera línea y añadirlo al div
                    var primerEncabezado = document.createElement('h1');
                    primerEncabezado.textContent = lineas[0];
                    nuevoDiv.appendChild(primerEncabezado);

                    // Crear párrafos para las líneas restantes y agregarlos al div
                    for (var i = 1; i < lineas.length; i++) {
                        var parrafo = document.createElement('p');
                        parrafo.textContent = lineas[i];
                        nuevoDiv.appendChild(parrafo);
                    }

                    // Agregar el div al contenedor
                    contenedor.appendChild(nuevoDiv);

                    // Crear el enlace secundario y añadirle la clase y el evento onclick
                    var enlaceSecundario = document.createElement('a');
                    enlaceSecundario.href = '#'; // Puedes ajustar la URL según tus necesidades
                    enlaceSecundario.classList.add('enlaceSecundario');
                    enlaceSecundario.textContent = 'X';
                    enlaceSecundario.onclick = cerrar; // Asociar la función cerrar al evento onclick

                    // Agregar el enlace secundario al contenedor
                    contenedor.appendChild(enlaceSecundario);
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
