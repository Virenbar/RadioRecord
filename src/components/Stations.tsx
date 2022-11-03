import { Station } from "../model";
import { StationCard } from "./StationCard";

export function Stations(props: Props) {
    let i = 1;
    const list = props.stations.map(S => <StationCard index={i++} station={S} />);

    return (
        <div class="container p-3 d-flex flex-wrap justify-content-center">
            {list}
            <div class="card fake"></div>
            <div class="card fake"></div>
            <div class="card fake"></div>
            <div class="card fake"></div>
        </div>
    );
}

interface Props {
    stations: Station[]
}
