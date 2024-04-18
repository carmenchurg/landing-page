
    // Variables
    var audio = new Audio('audio.mp3');
    var isPlaying = false;
    var playButton = document.getElementById('boton');

    // Función para cambiar entre reproducir y pausar la música
    function togglePlay() {
      if (isPlaying) {
        audio.pause();
        playButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note" viewBox="0 0 16 16"><path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2"/><path fill-rule="evenodd" d="M9 3v10H8V3z"/><path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5z"/></svg>';
      } else {
        audio.play();
        playButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16"><path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8a.5.5 0 0 1 .5-.5z"/></svg>';
      }
      isPlaying = !isPlaying;
    }

    // Asignar la función togglePlay al evento clic del botón
    playButton.addEventListener('click', togglePlay);


    // Obtener el modal
var modal = document.getElementById("rulesModal");

// Obtener el botón que abre el modal
var btn = document.getElementById("showRulesBtn");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario haga clic en el botón, abrir el modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Cuando el usuario haga clic en <span> (x), cerrar el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario haga clic en cualquier lugar fuera del modal, cerrar el modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


  