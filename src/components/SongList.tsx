import { SongCard } from "./SongCard";
export function SongList(): JSX.Element {
  return (
    <>
      <section className="play-list">
        {/* TODO: Loop through songs here instead of in SongListSingle */}
        <SongCard />
      </section>
    </>
  );
}
