import { SongList } from "../components/SongList";
import { NowPlaying } from "../components/NowPlaying";
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
        <NowPlaying />
        <SongList />
      </main>
    </>
  );
}
