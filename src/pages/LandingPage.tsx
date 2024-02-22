import { SongList } from "../components/SongList";
import { NowPlaying } from "../components/NowPlaying";
import { Header } from "../components/Header";
export function LandingPage(): JSX.Element {
  return (
    <>
      <Header />
      <main className="media-player">
        <NowPlaying />
        <SongList />
      </main>
    </>
  );
}
