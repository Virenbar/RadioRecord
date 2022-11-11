import _ from "lodash";
import { useState } from "preact/hooks";
import { Station } from "../model";
import { StationCard } from "./StationCard";
import { StationSort } from "./StationSort";

export function StationList(props: Props) {
    const [stations, setStations] = useState(props.stations);
    const list = stations.map(S => <StationCard key={S.id} station={S} />);
    const fake = (4 - (stations.length % 4)) % 4;

    return (
        <div class="container p-3">
            <div class="d-flex align-items-center justify-content-between font-monospace">
                <h5>Каналов: {stations.length}</h5>
                <StationSort onChange={onSortChange} />
            </div>
            <div class="d-flex flex-wrap justify-content-center">
                {list}
                {Array(fake).fill(<div class="card fake"></div>)}
            </div>
        </div>
    );

    function onSortChange(sort: string | null) {
        if (!sort) { return; }
        setStations(sortStations(sort));
    }

    function sortStations(sort: string) {
        switch (sort) {
            case "A-Z":
                return _.sortBy(props.stations, S => S.title.toLowerCase());
            case "new":
                return _.sortBy(props.stations, S => S.prefix == "record" ? 0 : -S.id);
            default:
                return props.stations;
        }
    }
}

interface Props {
    stations: Station[]
}
