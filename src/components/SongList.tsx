import { SongListSingle } from "./SongListSingle";
export function SongList(): JSX.Element {
  return (
    <>
      <section className="play-list">
        <SongListSingle />
      </section>
    </>
  );
}
