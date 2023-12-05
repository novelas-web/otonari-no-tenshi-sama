function emer(event) {

      var seccion = document.getElementById('mi-seccion');
      seccion.innerHTML = '<div class="vent"> <iframe src="#" name="vent"></iframe> <a href="#" onclick="cerr(event)">X</a></div>';

}

function cerr(event) {
      var seccion = document.getElementById('mi-seccion');
      seccion.innerHTML = '';
    }
