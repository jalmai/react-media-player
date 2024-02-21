import { SongList } from "../components/SongList";
export function LandingPage(): JSX.Element {
  return (
    <>
      <header className="header">
        <span className="arrow-back material-icons"> arrow_back_ios </span>
        <span className="header-text">Playlist - Moody</span>
        <span className="three-dots material-icons"> more_vert </span>
      </header>
      <main className="media-player">
        {/* TODO: Move to NowPlaying.tsx */}
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
        <SongList />
      </main>
    </>
  );
}
