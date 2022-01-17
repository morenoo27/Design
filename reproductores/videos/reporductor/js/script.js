window.onload = () => {

  /* DECLARAMOS VARIABLES */
  let video = document.getElementById('reproductor');

  let tiempoTotal = document.getElementById('total');

  let play = document.getElementById('play');

  let stop = document.getElementById('stop');

  let restart = document.getElementById('restart');

  let mute = document.getElementById('mute');

  let subirVol = document.getElementById('subirVol');

  let bajarVol = document.getElementById('bajarVol');

  let masVeloc = document.getElementById('aumentarVel');

  let menosVeloc = document.getElementById('disminuirVel');

  let avanzar = document.getElementById('saltoAdelante');

  let retroceder = document.getElementById('saltoAtras');

  let barraTiempo = document.getElementById('barraTiempo');

  let pantalla = document.getElementById('screen');

  determinarDuracion(barraTiempo, video, tiempoTotal);

  //evento para cambiar volumen
  video.addEventListener('volumechange', () => {

    let video = document.getElementById('reproductor');

    volumenVideo = video.volume;
  });

  //evento "cursor de tiempo en movimiento"
  video.addEventListener('timeupdate', () => {

    let video = document.getElementById('reproductor');
    let barraTiempo = document.getElementById('barraTiempo');
    let tiempoTrans = document.getElementById('trans');
    let minutos;
    let segundos;

    barraTiempo.value = video.currentTime;

    if (video.currentTime >= 60) {

      minutos = Math.floor(video.currentTime / 60);
      segundos = Math.floor(video.currentTime % 60);
    } else {

      segundos = Math.floor(video.currentTime);
      minutos = 0;
    }

    if ((segundos / 10) >= 1) {
      tiempoTrans.innerHTML = minutos + ":" + segundos;
    } else {
      tiempoTrans.innerHTML = minutos + ":0" + segundos;
    }

  });

  //evento click para boton click
  play.addEventListener('click', () => {

    let play = document.getElementById('play');

    if (play.value == '0') {

      video.play();

      play.value = '1';
      play.firstChild.src = "images/pause.svg";

    } else {

      video.pause();
      play.value = '0';
      play.firstChild.src = "images/play.svg";

    }


  })

  //evento click apra boton de para video
  stop.addEventListener('click', () => {

    let video = document.getElementById('reproductor');
    let play = document.getElementById('play');

    video.pause();

    video.currentTime = 0;

    play.value = '0';
    play.firstChild.src = "images/play.svg";
  })

  //evento click para resetear timepo del video
  restart.addEventListener('click', () => { video.currentTime = 0; });

  //evento para mutear video
  mute.addEventListener('click', () => {

    let altavoz = document.getElementById('altavoz')

    if (video.volume < 0.1) {
      video.volume = 0.5;
      altavoz.src = "images/altavoz.svg";

    } else {
      video.volume = 0;
      altavoz.src = "images/mute.svg";
    }

  })

  //evento boton para subir volumen
  subirVol.addEventListener('click', () => {

    let video = document.getElementById('reproductor');

    if (video.volume < 1.0) {
      video.volume += 0.1;
    }
    document.getElementById('altavoz').src = "images/altavoz.svg";
    volumenVideo = video.volume;

  });

  //evento para bajar volumen
  bajarVol.addEventListener('click', () => {

    if (video.volume > 0.1) {
      video.volume -= 0.1;
    } else {
      document.getElementById('altavoz').src = "images/mute.svg";

    }
    volumenVideo = video.volume;
  });

  //evento para aumentar velocidad
  masVeloc.addEventListener('click', () => {

    if (video.playbackRate < 2) {
      video.playbackRate += 0.1;
    }

    document.getElementById('velocidad').innerHTML = video.playbackRate.toFixed(1);


  });

  //evento para disminuir la velocidad
  menosVeloc.addEventListener('click', () => {


    if (video.playbackRate > 0.1) {
      video.playbackRate -= 0.1;
    }

    document.getElementById('velocidad').innerHTML = video.playbackRate.toFixed(1);
  });

  //evento apra avanzar en el tiempo del video
  avanzar.addEventListener('click', () => {

    if (video.currentTime < (video.duration - video.duration / 10)) {

      video.currentTime += parseInt((video.duration / 10));

    }
  });

  //evento apra retroeceder en el evento del video
  retroceder.addEventListener('click', () => {

    if (video.currentTime > (video.duration / 10)) {

      video.currentTime -= Math.floor((video.duration / 10));

    }
  });

  //listener para cambiar la pos del cursor y poner el video en reproducciondesde ese momento
  barraTiempo.addEventListener('input', function () {

    video.currentTime = this.value;
    video.pause();

  });

  //listener para cuando se cambia el cursor de la barra de tiempo
  barraTiempo.addEventListener('change', () => { document.getElementById('reproductor').play() });

  //listener para el 'fullScreen'
  pantalla.addEventListener("click", () => { document.getElementById('reproductor').requestFullscreen() });
};

/**
 * Funcion que declara y establece la duracion total del video que se este cargando en la pagina web.
 * Este metodo establece el principio y fin de la barra temporal, acorde a la duracion del video
 * y lo muestra en formato 'hh/mm'
 * @param {HTMLElement} time elemento correspondiente a una barra temporal
 * @param {HTMLElement} video elemento correspondiente al video de la pagina web
 * @param {HTMLElement} totalTime elemento correspondiente a la duracion total del video en cuestion
 */
function determinarDuracion(time, video, totalTime) {

  time.max = video.duration;
  time.value = 0;

  totalTime.innerHTML = "0:" + Math.floor(video.duration);

  if (video.duration > 60) {
    totalTime.innerHTML = Math.floor(video.duration / 60) + ":" + Math.floor(video.duration % 60);
  }
}
