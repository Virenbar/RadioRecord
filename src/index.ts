import fetch from "node-fetch";
import fs from "node:fs";
import sass from "sass";

async function Update() {
    const Responce = await fetch("https://www.radiorecord.ru/api/stations/");
    const API = await Responce.json() as API;
    const Stations = API.result.stations;

    //MD build
    let File = "## Станции\n\n";
    for (let i = 0; i < Stations.length; i++) {
        const S = Stations[i];

        File += `${i + 1}. [${S.title}](${S.shareUrl})${S.new ? " (NEW)" : ""}  \n`;
        File += `${S.tooltip.trim()}  \n`;
        File += "Потоки:\n";
        File += `[AAC 64](${S.stream_64})\n`;
        File += `[AAC 96](${S.stream_128})\n`;
        File += `[M3U](${S.stream_hls})\n`;
    }
    fs.writeFileSync("Stations.md", File);

    //HTML and CSS build
    const btn = "btn btn-outline-primary";
    let HTML = "";
    for (let i = 0; i < Stations.length; i++) {
        const S = Stations[i];
        HTML += `
            <div class="card">
                <div class="card-header d-flex flex-nowrap align-items-center">
                    <h5>
                        <a href="${S.shareUrl}">${i + 1}. ${S.title}</a>
                    </h5>
                    ${S.new ? "<div class=\"mx-1 new\">NEW</div>" : ""}
                    <div class="logo ms-auto">
                        ${S.svg_fill}
                    </div>
                </div>
                <div class="card-body">
                    <p>${S.tooltip}</p> 
                </div>
                <div class="card-footer text-center">
                    <div class="btn-group btn-group-sm" role="group" area-label="Links">
                        <a class="${btn}" href="${S.stream_64}">AAC 64</a>
                        <a class="${btn}" href="${S.stream_128}">AAC 96</a>
                        <a class="${btn}" href="${S.stream_hls}">M3U</a>
                    </div>
                </div>
            </div>`;
    }

    //Fake stations
    for (let i = 0; i < 4; i++) {
        HTML += "<div class=\"card fake\"></div>";
    }

    if (!fs.existsSync("pages")) { fs.mkdirSync("pages"); }

    const css = sass.compile("sass/style.scss").css;
    fs.writeFileSync("pages/style.css", css);
    console.log("Styles compiled");

    let index = fs.readFileSync("assets/index.html").toString();
    index = index.replace("<!-- Template -->", HTML);
    fs.writeFileSync("pages/index.html", index);
    console.log("Page builded");

    //Playlist build
    if (!fs.existsSync("playlists")) { fs.mkdirSync("playlists",); }
    CreatePlaylist(Stations.map<PlaylistTrack>(S => ({ name: S.title, path: S.stream_64 })), "Radio Record (AAC 64)");
    CreatePlaylist(Stations.map<PlaylistTrack>(S => ({ name: S.title, path: S.stream_128 })), "Radio Record (AAC 96)");
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

interface PlaylistTrack {
    name: string
    path: string
}

interface API {
    result: {
        genres: Genre[],
        stations: Station[]
    }
}

interface Genre {
    id: number,
    name: string
}

interface Station {
    id: number,
    prefix: string,
    title: string,
    tooltip: string,
    sort: number,
    svg_outline: string,
    svg_fill: string,
    short_title: string,
    icon_gray: string,
    icon_fill_colored: string,
    icon_fill_white: string,
    new: boolean,
    stream_64: string,
    stream_128: string,
    stream_320: string,
    stream_hls: string,
    genre: Genre[],
    detail_page_url: string,
    shareUrl: string,
    mark: unknown
}
