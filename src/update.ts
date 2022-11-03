import fetch from "node-fetch";
import fs from "node:fs";
import { API, PlaylistTrack, Station } from "./model";

async function Update() {
    const response = await fetch("https://www.radiorecord.ru/api/stations/");
    const api = await response.json() as API;
    const stations = api.result.stations;
    const json = JSON.stringify(api.result, null, 4);
    fs.writeFileSync("data.json", json);

    //MD build
    CreateMD(stations);

    //Playlist build
    if (!fs.existsSync("playlists")) { fs.mkdirSync("playlists",); }
    CreatePlaylist(stations.map<PlaylistTrack>(S => ({ name: S.title, path: S.stream_64 })), "Radio Record (AAC 64)");
    CreatePlaylist(stations.map<PlaylistTrack>(S => ({ name: S.title, path: S.stream_128 })), "Radio Record (AAC 96)");
}

function CreateMD(stations: Station[]) {
    let File = "## Станции\n\n";
    for (let i = 0; i < stations.length; i++) {
        const S = stations[i];

        File += `${i + 1}. [${S.title}](${S.shareUrl})${S.new ? " (NEW)" : ""}  \n`;
        File += `${S.tooltip.trim()}  \n`;
        File += "Потоки:\n";
        File += `[AAC 64](${S.stream_64})\n`;
        File += `[AAC 96](${S.stream_128})\n`;
        File += `[M3U](${S.stream_hls})\n`;
    }
    fs.writeFileSync("stations.md", File);
    console.log("Created: stations.md");
}

function CreatePlaylist(Tracks: PlaylistTrack[], name: string) {
    let File = "#EXTM3U\n";
    File += `#PLAYLIST:${name}\n`;
    Tracks.forEach(T => {
        File += `#EXTINF: -1,${T.name}\n`;
        File += `${T.path}\n`;
    });
    fs.writeFileSync(`playlists/${name}.m3u8`, File);
    console.log(`Playlist created: ${name}`);
}

Update().then(() => {
    console.log("Update successful");
}).catch((e) => {
    console.error(e);
    throw new Error("Update failed");
});

