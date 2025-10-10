import { saveAs } from 'file-saver';

function getTrack(station: Station, quality: Quality) {
  switch (quality) {
    case '64':
      return station.AAC64;
    case '96':
      return station.AAC96;
    default:
      return station.AAC64;
  }
}

function savePlaylist(quality: Quality, checked: Set<number>) {
  const { stations } = useData();
  const tracks = stations.value.filter(s => checked.has(s.id));

  const name = `Radio Record (${quality})`;
  let playlist = '#EXTM3U\n';
  playlist += `#PLAYLIST:${name}\n`;
  tracks.forEach((T) => {
    playlist += `#EXTINF: -1,${T.title}\n`;
    playlist += `${getTrack(T, quality)}\n`;
  });
  const blob = new Blob([playlist]);
  saveAs(blob, `${name}.m3u8`);
  console.log(`Playlist saved: ${name}(${tracks.length})`);
}

export default function () {
  return { savePlaylist };
}
