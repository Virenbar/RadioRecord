import { saveAs } from "file-saver";

function getTrack(station: Station, quality: PlaylistQuality) {
  switch (quality) {
    case "AAC 64":
      return station.stream_64;
    case "AAC 96":
      return station.stream_128;
    default:
      return station.stream_64;
  }
}

function savePlaylist(quality: PlaylistQuality, checked: Set<number>) {
  const { stations } = useData();
  const tracks = stations.value.filter(s => checked.has(s.id));

  const name = `Radio Record (${quality})`;
  let playlist = "#EXTM3U\n";
  playlist += `#PLAYLIST:${name}\n`;
  tracks.forEach(T => {
    playlist += `#EXTINF: -1,${T.title}\n`;
    playlist += `${getTrack(T, quality)}\n`;
  });
  const blob = new Blob([playlist]);
  saveAs(blob, `${name}.m3u8`);
  console.log(`Playlist saved: ${name}(${tracks.length})`);

}

export default function () {
  return {
    savePlaylist
  };
}

