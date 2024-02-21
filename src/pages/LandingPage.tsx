export function LandingPage(): JSX.Element {
  return (
    <>
      <header className="header">
        <span className="arrow-back material-icons"> arrow_back_ios </span>
        <span className="header-text">Playlist - Moody</span>
        <span className="three-dots material-icons"> more_vert </span>
      </header>
      <main className="media-player">
        <section className="song">
          <figure className="album-image-container">
            <img
              src="assets/On_Your_Side_album_cover.jpg"
              alt="A Rocket to the moon - album cover"
            />
          </figure>

          <div className="song-info-container">
            <span className="add material-icons"> add_circle_outline </span>
            <div className="song-info">
              <p className="upper-text">A Rocket to the mooon</p>
              <p className="lower-text">Like we used to</p>
            </div>
            <span className="heart material-icons"> favorite </span>
          </div>

          <div className="time-line-container">
            <span>0:40</span>
            <div className="outer-time-line">
              <div className="inner-time-line"></div>
            </div>
            <span>3.42</span>
          </div>

          <div className="controlls">
            <span className="material-icons"> replay </span>
            <span className="material-icons previous"> fast_rewind </span>
            <span className="material-icons play"> play_circle_filled </span>
            <span className="material-icons next"> fast_rewind </span>
            <span className="material-icons"> shuffle </span>
          </div>
        </section>

        <section className="play-list">
          <article className="song-item">
            <figure>
              <img src="assets/On_Your_Side_album_cover.jpg" alt="" />
            </figure>
            <div className="song-info">
              <p className="upper-text">A Rocket to the mooon</p>
              <p className="lower-text">Like we used to</p>
            </div>
            <span className="material-icons play"> play_circle_filled </span>
          </article>
          <article className="song-item">
            <figure>
              <img src="assets/john_legend_save_room.jpg" alt="" />
            </figure>
            <div className="song-info">
              <p className="upper-text">John Legend</p>
              <p className="lower-text">Save the room</p>
            </div>
            <span className="material-icons play"> play_circle_filled </span>
          </article>
          <article className="song-item">
            <figure>
              <img src="assets/john_legend_dont_care.jpg" alt="" />
            </figure>
            <div className="song-info">
              <p className="upper-text">John Legend</p>
              <p className="lower-text">We just don't care</p>
            </div>
            <span className="material-icons play"> play_circle_filled </span>
          </article>
          <article className="song-item">
            <figure>
              <img src="assets/On_Your_Side_album_cover.jpg" alt="" />
            </figure>
            <div className="song-info">
              <p className="upper-text">A Rocket to the mooon</p>
              <p className="lower-text">Dakota</p>
            </div>
            <span className="material-icons play"> play_circle_filled </span>
          </article>
          <article className="song-item">
            <figure>
              <img src="assets/Candyman.webp" alt="" />
            </figure>
            <div className="song-info">
              <p className="upper-text">Zedd & Aloe Blacc</p>
              <p className="lower-text">Candyman</p>
            </div>
            <span className="material-icons play"> play_circle_filled </span>
          </article>
          <article className="song-item">
            <figure>
              <img src="assets/ragnbone_man.jpg" alt="" />
            </figure>
            <div className="song-info">
              <p className="upper-text">Rag 'n' Bone Man</p>
              <p className="lower-text">Human</p>
            </div>
            <span className="material-icons play"> play_circle_filled </span>
          </article>
          <article className="song-item">
            <figure>
              <img src="assets/imagine_dragon_shots.jpg" alt="" />
            </figure>
            <div className="song-info">
              <p className="upper-text">Imagine Dragons</p>
              <p className="lower-text">Shots (Broiler)</p>
            </div>
            <span className="material-icons play"> play_circle_filled </span>
          </article>
        </section>
      </main>
    </>
  );
}
