import { Station } from "../model";

export function StationCard(props: Props) {
    const S = props.station;
    return (
        <div class="card">
            <div class="card-header d-flex flex-nowrap align-items-center">
                <h5>
                    <a href={S.shareUrl}>{props.index}. {S.title}</a>
                </h5>
                {S.new ? <div class="mx-1 new">NEW</div> : null}
                <div class="logo ms-auto" dangerouslySetInnerHTML={{ __html: S.svg_fill }}></div>
            </div>
            <div class="card-body">
                {S.tooltip}
            </div>
            <div class="card-footer text-center">
                <div class="btn-group btn-group-sm" role="group" area-label="Links">
                    <a class="btn btn-outline-primary" href={S.stream_64}>AAC 64</a>
                    <a class="btn btn-outline-primary" href={S.stream_128}>AAC 96</a>
                    <a class="btn btn-outline-primary" href={S.stream_hls}>M3U</a>
                </div>
            </div>
        </div>
    );
}

interface Props {
    index: number
    station: Station
}
