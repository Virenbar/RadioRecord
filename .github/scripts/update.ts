import fs from 'fs';
import type { Station, Stations } from '../../types/record';
import { getStream } from '../../utils/stream';

async function Update() {
  const response = await fetch('https://www.radiorecord.ru/api/stations/');
  const api = await response.json() as Stations;
  const stations = api.result.stations;
  const genres = api.result.genre;
  const tags = api.result.tags;

  fs.writeFileSync('data/stations.json', JSON.stringify({ list: stations }, null, 4));
  fs.writeFileSync('data/genres.json', JSON.stringify({ list: genres }, null, 4));
  fs.writeFileSync('data/tags.json', JSON.stringify({ list: tags }, null, 4));

  // MD build
  CreateMD(stations);

  // Playlist build
  if (!fs.existsSync('playlists')) fs.mkdirSync('playlists');
  CreatePlaylist(stations, '64');
  CreatePlaylist(stations, '96');
}

function CreateMD(stations: Station[]) {
  let file = '## Станции\n\n';
  for (let i = 0; i < stations.length; i++) {
    const S = stations[i];

    file += `${i + 1}. [${S.title}](${S.shareUrl})${S.new ? ' (NEW)' : ''}  \n`;
    file += `${S.tooltip.trim()}  \n`;
    file += 'Потоки:\n';
    file += `[AAC 64](${getStream(S, '64')})\n`;
    file += `[AAC 96](${getStream(S, '96')})\n`;
    file += `[M3U](${S.stream_hls})\n`;
  }
  fs.writeFileSync('stations.md', file);
  console.log('Created: stations.md');
}

function CreatePlaylist(stations: Station[], quality: Quality) {
  const name = `Radio Record (AAC ${quality})`;
  const tracks = stations.map(S => ({ name: S.title, path: getStream(S, quality) }));
  let file = '#EXTM3U\n';
  file += `#PLAYLIST:${name}\n`;
  tracks.forEach((T) => {
    file += `#EXTINF: -1,${T.name}\n`;
    file += `${T.path}\n`;
  });
  fs.writeFileSync(`playlists/${name}.m3u8`, file);
  console.log(`Playlist created: ${name}`);
}

try {
  await Update();
  console.log('Update successful');
}
catch (error) {
  console.error(error);
  throw new Error('Update failed');
}

type Quality = '64' | '96';
