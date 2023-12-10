import Estilos from '../../public/play/css/style.css'
import Animate from '../../public/play/css/animate.css'
import Awesome from '../../public/play/css/font-awesome.min.css'
import Script from 'next/script'
import { useState } from 'react';

export default function ddPlay() {

  const [isPlaying, setPlaying] = useState(false);

  function togglePlay() {
    const audio = new Audio(URL_STREAMING);

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setPlaying(!isPlaying);
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
                              <i id="playerButton" className="fa fa-play" />{" "}
                              <span id="buttonPlay">PLAY</span>
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