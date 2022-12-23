export interface Stations {
    result: {
        tags: Tag[]
        genre: Genre[],
        stations: Station[]
    }
}

export interface Tag {
    id: number
    name: string
    svg: string
    pdf: string
}

export type Genre = Omit<Tag, "svg" | "pdf">

export interface Station {
    id: number
    prefix: string
    title: string
    tooltip: string
    sort: number
    svg_outline: string
    svg_fill: string
    short_title: string
    icon_gray: string
    icon_fill_colored: string
    icon_fill_white: string
    new: boolean | number
    stream_64: string
    stream_128: string
    stream_320: string
    stream_hls: string
    genre: (Genre | Tag)[]
    detail_page_url: string
    shareUrl: string

}

export interface StationsNow {
    result: {
        id: number
        track: Track
    }
}
export interface Track {
    id: number;
    artist: string;
    song: string;
    image100: string;
    image200: string;
    image600: string;
    listenUrl: null | string;
    itunesUrl: null | string;
    itunesId: null | string;
    noFav: boolean;
    noShow: boolean;
    shareUrl: string;
}
