document.getElementById('enlace').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar que el enlace abra la ruta directamente

    // Obtener la ruta del archivo desde el atributo href
    const archivoURL = this.getAttribute('href');

    // Crear un nuevo div
    const nuevoDiv = document.createElement('div');
    nuevoDiv.classList.add('nuevo-div');

    // Obtener el contenido del archivo de texto
    fetch(archivoURL)
        .then(response => response.text())
        .then(texto => {
            // Dividir el texto en párrafos
            const parrafos = texto.split('\n');
            
            // Crear elementos de párrafo y añadir al div
            parrafos.forEach(parrafo => {
                const p = document.createElement('p');
                p.textContent = parrafo;
                nuevoDiv.appendChild(p);
            });

            // Añadir el nuevo div al contenido
            document.getElementById('contenido').appendChild(nuevoDiv);
        })
        .catch(error => console.error('Error al cargar el archivo:', error));
});

function cerr(event) {
      var seccion = document.getElementById('contenido');
      seccion.innerHTML = '';
    }
