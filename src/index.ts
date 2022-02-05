import fetch from 'node-fetch';
import fs from 'node:fs';

async function Update() {
    const R = await fetch("https://www.radiorecord.ru/api/stations/")
    const API = await R.json() as API
    const Stations = API.result.stations

    let File = "## Станции\n\n"
    for (let i = 0; i < Stations.length; i++) {
        const S = Stations[i];

        File += `${i + 1}. [${S.title}](${S.shareUrl})  \n`
        File += `${S.tooltip}  \n`
        File += "Потоки:\n"
        File += `[64](${S.stream_64})\n`
        File += `[128](${S.stream_128})\n`
        File += `[320](${S.stream_320})\n`
        File += `[HLS](${S.stream_hls})\n`

    }
    fs.writeFileSync("Stations.md", File)
}

Update()

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