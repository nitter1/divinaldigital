import Estilos from '../../public/play/css/style.css'
import Animate from '../../public/play/css/animate.css'
import Awesome from '../../public/play/css/font-awesome.min.css'
import Script from 'next/script'
import { useState } from 'react';

export default function ddPlay() {

  const URL_STREAMING = 'https://26583.live.streamtheworld.com/JBFMAAC.aac?dist=radios.com.br&1702'; // Replace with your actual streaming URL
  const [isPlaying, setPlaying] = useState(false);

  useEffect(() => {
    // Check if window is defined (running in the browser)
    if (typeof window !== 'undefined') {
      const audio = new Audio(URL_STREAMING);

      audio.onplay = function () {
        setPlaying(true);
        // Your existing logic...
        var botao = document.getElementById('playerButton');
        var bplay = document.getElementById('buttonPlay');
        if (botao.className === 'fa fa-play') {
            botao.className = 'fa fa-pause';
            bplay.firstChild.data = 'PAUSE';
        }
      };

      audio.onpause = function () {
        setPlaying(false);
        // Your existing logic...
        var botao = document.getElementById('playerButton');
    var bplay = document.getElementById('buttonPlay');
    if (botao.className === 'fa fa-pause') {
        botao.className = 'fa fa-play';
        bplay.firstChild.data = 'PLAY';
    }
      };

      // ... Other audio event listeners ...

      window.togglePlay = () => {
        if (isPlaying) {
          audio.pause();
        } else {
          audio.play();
        }

        setPlaying(!isPlaying);
      };
    }
  }, [isPlaying, URL_STREAMING]);

  // Unmute when volume changed
audio.onvolumechange = function () {
  if (audio.volume > 0) {
      audio.muted = false;
  }
}

audio.onerror = function () {
  var confirmacao = confirm('Stream Down / Network Error. \nClick OK to try again.');

  if (confirmacao) {
      window.location.reload();
  }
}

document.getElementById('volume').oninput = function () {
  audio.volume = intToDecimal(this.value);

  var page = new Page();
  page.changeVolumeIndicator(this.value);
}

function volumeUp() {
  var vol = audio.volume;
  if(audio) {
      if(audio.volume >= 0 && audio.volume < 1) {
          audio.volume = (vol + .01).toFixed(2);
      }
  }
}

function volumeDown() {
  var vol = audio.volume;
  if(audio) {
      if(audio.volume >= 0.01 && audio.volume <= 1) {
          audio.volume = (vol - .01).toFixed(2);
      }
  }
}

function mute() {
  if (!audio.muted) {
      document.getElementById('volIndicator').innerHTML = 0;
      document.getElementById('volume').value = 0;
      audio.volume = 0;
      audio.muted = true;
  } else {
      var localVolume = localStorage.getItem('volume');
      document.getElementById('volIndicator').innerHTML = localVolume;
      document.getElementById('volume').value = localVolume;
      audio.volume = intToDecimal(localVolume);
      audio.muted = false;
  }
}

function getStreamingData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {

      if (this.readyState === 4 && this.status === 200) {

          if(this.response.length === 0) {
              console.log('%cdebug', 'font-size: 22px')
          }

          var data = JSON.parse(this.responseText);

          var page = new Page();

          // Formating characters to UTF-8
          let song = data.currentSong.replace(/&apos;/g, '\'');
          currentSong = song.replace(/&amp;/g, '&');

          let artist = data.currentArtist.replace(/&apos;/g, '\'');
          currentArtist = artist.replace(/&amp;/g, '&');

          // Change the title
          document.title = currentSong + ' - ' + currentArtist + ' | ' + RADIO_NAME;

          if (document.getElementById('currentSong').innerHTML !== song) {
              page.refreshCover(currentSong, currentArtist);
              page.refreshCurrentSong(currentSong, currentArtist);
              page.refreshLyric(currentSong, currentArtist);

              for (var i = 0; i < 2; i++) {
                  page.refreshHistoric(data.songHistory[i], i);
              }
          }
      } 
  };

  var d = new Date();

  // Requisition with timestamp to prevent cache on mobile devices
  xhttp.open('GET', API_URL);
  xhttp.send();
}

// Player control by keys
document.addEventListener('keydown', function (k) {
  var k = k || window.event;
  var key = k.keyCode || k.which;
  
  var slideVolume = document.getElementById('volume');

  var page = new Page();

  switch (key) {
      // Arrow up
      case 38:
          volumeUp();
          slideVolume.value = decimalToInt(audio.volume);
          page.changeVolumeIndicator(decimalToInt(audio.volume));
          break;
      // Arrow down
      case 40:
          volumeDown();
          slideVolume.value = decimalToInt(audio.volume);
          page.changeVolumeIndicator(decimalToInt(audio.volume));
          break;
      // Spacebar
      case 32:
          togglePlay();
          break;
      // P
      case 80:
          togglePlay();
          break;
      // M
      case 77:
          mute();
          break;
      // 0
      case 48:
          audio.volume = 0;
          slideVolume.value = 0;
          page.changeVolumeIndicator(0);
          break;
      // 0 numeric keyboard
      case 96:
          audio.volume = 0;
          slideVolume.value = 0;
          page.changeVolumeIndicator(0);
          break;
      // 1
      case 49:
          audio.volume = .1;
          slideVolume.value = 10;
          page.changeVolumeIndicator(10);
          break;
      // 1 numeric key
      case 97:
          audio.volume = .1;
          slideVolume.value = 10;
          page.changeVolumeIndicator(10);
          break;
      // 2
      case 50:
          audio.volume = .2;
          slideVolume.value = 20;
          page.changeVolumeIndicator(20);
          break;
      // 2 numeric key
      case 98:
          audio.volume = .2;
          slideVolume.value = 20;
          page.changeVolumeIndicator(20);
          break;
      // 3
      case 51:
          audio.volume = .3;
          slideVolume.value = 30;
          page.changeVolumeIndicator(30);
          break;
      // 3 numeric key
      case 99:
          audio.volume = .3;
          slideVolume.value = 30;
          page.changeVolumeIndicator(30);
          break;
      // 4
      case 52:
          audio.volume = .4;
          slideVolume.value = 40;
          page.changeVolumeIndicator(40);
          break;
      // 4 numeric key
      case 100:
          audio.volume = .4;
          slideVolume.value = 40;
          page.changeVolumeIndicator(40);
          break;
      // 5
      case 53:
          audio.volume = .5;
          slideVolume.value = 50;
          page.changeVolumeIndicator(50);
          break;
      // 5 numeric key
      case 101:
          audio.volume = .5;
          slideVolume.value = 50;
          page.changeVolumeIndicator(50);
          break;
      // 6 
      case 54:
          audio.volume = .6;
          slideVolume.value = 60;
          page.changeVolumeIndicator(60);
          break;
      // 6 numeric key
      case 102:
          audio.volume = .6;
          slideVolume.value = 60;
          page.changeVolumeIndicator(60);
          break;
      // 7
      case 55:
          audio.volume = .7;
          slideVolume.value = 70;
          page.changeVolumeIndicator(70);
          break;
      // 7 numeric key
      case 103:
          audio.volume = .7;
          slideVolume.value = 70;
          page.changeVolumeIndicator(70);
          break;
      // 8
      case 56:
          audio.volume = .8;
          slideVolume.value = 80;
          page.changeVolumeIndicator(80);
          break;
      // 8 numeric key
      case 104:
          audio.volume = .8;
          slideVolume.value = 80;
          page.changeVolumeIndicator(80);
          break;
      // 9
      case 57:
          audio.volume = .9;
          slideVolume.value = 90;
          page.changeVolumeIndicator(90);
          break;
      // 9 numeric key
      case 105:
          audio.volume = .9;
          slideVolume.value = 90;
          page.changeVolumeIndicator(90);
          break;
  }
});

function intToDecimal(vol) {
  return vol / 100;
}

function decimalToInt(vol) {
  return vol * 100;
}

  return (
    <>

    <link rel="stylesheet" href={Awesome}/>
    <link rel="stylesheet" type="text/css" href={Animate}/>
    <link rel="stylesheet" href={Estilos}/>
      <div className="cover-site">
        <div id="bgCover" />
        <div className="bg-mask" />
      </div>
      <main>
        <section id="player">
          <div className="container">
            <div className="row web-player">
              <div className="col-12 col-lg-10">
                <div className="row">
                  <div className="col-12 col-md-5">
                    <div className="cover-album">
                      <div id="currentCoverArt" />
                      <div className="watermark" />
                    </div>
                  </div>
                  <div className="col-12 ml-md-auto col-md-6">
                    <div className="row">
                      <div className="col-12">
                        <div className="info-current-song">
                          <h2
                            id="currentSong"
                            className="current-song text-uppercase"
                          >
                            Música
                          </h2>
                          <h3
                            id="currentArtist"
                            className="current-artist text-captalize"
                          >
                            Artista
                          </h3>
                        </div>
                      </div>
                      <div className="col-12">
                       
                        <div className="row">
                          <div className="play-pause col-12 col-md-6 text-center">
                          <button className="btn-play" onClick={togglePlay}>
                            <i id="playerButton" className={`fa ${isPlaying ? 'fa-pause' : 'fa-play'}`} />{" "}
                            <span id="buttonPlay">{isPlaying ? 'PAUSE' : 'PLAY'}</span>
                            </button>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 col-md-6 text-center">
                            <div className="row volume-control">
                              <div className="volume-icon col-1">
                                <i className="fa fa-volume-up" />
                              </div>
                              <div className="volume-slide col-10 text-center">
                                <input
                                  type="range"
                                  id="volume"
                                  step={1}
                                  min={0}
                                  max={100}
                                  defaultValue={80}
                                />
                              </div>
                              <div className="percentual-volume col-12">
                                Volume <span id="volIndicator">...</span>%
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 col-md-6 text-center call-lyrics">
                            <a
                              href="#"
                              className="lyrics"
                              data-target="#modalLyrics"
                            >
                              LYRICS
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row historic">
              <div className="col-12">
                <h2>TOCADA ANTERIORMENTE</h2>
                <div className="row" id="historicSong">
                  <article className="col-12 col-md-6">
                    <div className="cover-historic" />
                    <div className="music-info">
                      <div className="song">Música</div>
                      <div className="artist">Artista</div>
                    </div>
                  </article>
                  <article className="col-12 col-md-6">
                    <div className="cover-historic" />
                    <div className="music-info">
                      <div className="song">Música</div>
                      <div className="artist">Artista</div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div
        className="modal fade"
        id="modalLyrics"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="lyricsSong"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="lyricsSong">
                Lyrics
              </h5>
              <button
                type="button"
                style={{ color: "#fff" }}
                className="close"
                data-dismiss="modal"
                aria-label="Fechar"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body" id="lyric" />
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <Script src="/play/js/script.js" />
    </>

  )
}