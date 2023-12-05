document.getElementById('enlace').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar que el enlace redireccione

    // Obtener la ruta del archivo desde el atributo href
    var archivoURL = this.getAttribute('href');

    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'miDiv';

    // Realizar una solicitud para obtener el contenido del archivo
    var xhr = new XMLHttpRequest();
    xhr.open('GET', archivoURL, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Obtener el texto del archivo
            var textoArchivo = xhr.responseText;

            // Dividir el texto en líneas
            var lineas = textoArchivo.split('\n');

            // Crear párrafos y agregarlos al div
            lineas.forEach(function(linea) {
                var parrafo = document.createElement('p');
                parrafo.textContent = linea;
                nuevoDiv.appendChild(parrafo);
            });

            // Agregar el div al section
            document.getElementById('contenedor').appendChild(nuevoDiv);
        }
    };
    xhr.send();
});


function cerr(event) {
      var seccion = document.getElementById('contenido');
      seccion.innerHTML = '';
    }
