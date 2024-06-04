import FS from "file-saver";

function save(Tracks: PlaylistTrack[], name: string) {
  let playlist = "#EXTM3U\n";
  playlist += `#PLAYLIST:${name}\n`;
  Tracks.forEach(T => {
    playlist += `#EXTINF: -1,${T.name}\n`;
    playlist += `${T.path}\n`;
  });
  FS.saveAs(playlist, `${name}.m3u8`);
  console.log(`Playlist saved: ${name}`);
}

function savePlaylist(quality: PlaylistQuality) {
  const { stations } = useData();
  switch (quality) {
    case "AAC 96":
      save(stations.value.map<PlaylistTrack>(S => ({ name: S.title, path: S.stream_128 })), "Radio Record (AAC 96)");
      break;
    case "AAC 64":
      save(stations.value.map<PlaylistTrack>(S => ({ name: S.title, path: S.stream_64 })), "Radio Record (AAC 64)");
      break;
    default:
      return;
  }
}

export default function () {
  return {
    savePlaylist
  };
}

