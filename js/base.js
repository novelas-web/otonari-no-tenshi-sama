document.getElementById('enlace').addEventListener('click', function (event) {
      event.preventDefault(); // Evitar que el enlace redireccione
    
    var rutaArchivo = this.getAttribute('href');
    cargarContenido(rutaArchivo);
  });

  function cargarContenido(rutaArchivo) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', rutaArchivo, true);

    xhr.onload = function () {
      if (xhr.status === 200) {
        var contenidoTexto = xhr.responseText;
        var contenidoHTML = formatearContenido(contenidoTexto);

        crearDiv(contenidoHTML);
      }
    };

    xhr.send();
  }

  function formatearContenido(contenidoTexto) {
    var lineas = contenidoTexto.split('\n');
    var contenidoHTML = '';

    for (var i = 0; i < lineas.length; i++) {
      contenidoHTML += '<p>' + lineas[i] + '</p>';
    }

    return contenidoHTML;
  }

  function crearDiv(contenidoHTML) {
    var seccion = document.getElementById('seccion');
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'contenido';
    nuevoDiv.innerHTML = contenidoHTML;
    
    seccion.appendChild(nuevoDiv);
    
    nuevoDiv.style.display = 'block'; // Mostrar el contenido
  }
