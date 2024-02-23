import songs from "../assets/songs.json";
const playlist = songs.songs;
export function SongCard(): JSX.Element {
  return (
    <>
      {playlist.map(function (data) {
        return (
          <article key={data.index} className="song-item">
            <figure>
              <img src="assets/On_Your_Side_album_cover.jpg" alt="" />
            </figure>
            <div className="song-info">
              <p className="upper-text">{data.name}</p>
              <p className="lower-text">{data.artist}</p>
            </div>
            <span className="material-icons play"> play_circle_filled </span>
          </article>
        );
      })}
    </>
  );
}
