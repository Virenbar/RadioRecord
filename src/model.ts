export interface PlaylistTrack {
    name: string
    path: string
}

export interface API {
    result: {
        genres: Genre[],
        stations: Station[]
    }
}

export interface Genre {
    id: number,
    name: string
}

export interface Station {
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
