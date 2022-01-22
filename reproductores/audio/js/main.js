window.onload = function () {

  var audio = document.getElementById('reproductor');

  var tiempoTotal = document.getElementById('total');

  var tiempoTrans = document.getElementById('trans');

  var play = document.getElementById('play');

  var stop = document.getElementById('stop');

  var restart = document.getElementById('restart');

  var loop = document.getElementById('loop');

  var subirVol = document.getElementById('subirVol');

  var bajarVol = document.getElementById('bajarVol');

  if (audio.duration > 60) {
    tiempoTotal.innerHTML = parseInt(audio.duration / 60) + ":" + parseInt(audio.duration % 60);
  } else {
    tiempoTotal.innerHTML = "0:" + audio.duration;
  }


  audio.addEventListener('timeupdate', function () {

    var minutos;
    var segundos;

    if (audio.currentTime >= 60) {
      minutos = parseInt(audio.currentTime / 60);
      segundos = parseInt(audio.currentTime % 60);
    } else {
      segundos = parseInt(audio.currentTime);
      minutos = 0;
    }

    if ((segundos / 10) >= 1) {
      tiempoTrans.innerHTML = minutos + ":" + segundos;
    } else {
      tiempoTrans.innerHTML = minutos + ":0" + segundos;
    }


  });


  play.addEventListener('click', function () {

    if (play.innerHTML == 'PLAY') {

      audio.play();

      play.style.background = "red";
      play.innerHTML = 'PAUSE';

    } else {

      audio.pause();
      play.style.background = "grey";
      play.innerHTML = 'PLAY';

    }


  })

  stop.addEventListener('click', function () {

    audio.pause();

    audio.currentTime = 0

    play.innerHTML = 'PLAY'


  })

  restart.addEventListener('click', function () {
    audio.currentTime = 0;
  })

  loop.addEventListener('click', function () {
    if (audio.loop == false) {

      audio.loop = true;
      this.style.background = 'red';

    } else {

      audio.loop = false;
      this.style.background = 'grey';

    }
  })

  subirVol.addEventListener('click', function () {

    if (audio.volume < 1.0) {
      audio.volume += 0.1;
    }
    document.getElementById('altavoz').src = "images/altavoz.svg";
  });

  bajarVol.addEventListener('click', function () {

    console.log(audio.volume);
    if (audio.volume > 0.1) {
      audio.volume -= 0.1;
    } else {
      document.getElementById('altavoz').src = "images/mute.svg";

    }
  });


}