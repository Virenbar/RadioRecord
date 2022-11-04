import _ from "lodash";
import { Station } from "../model";
import { StationCard } from "./StationCard";
import { getSort, StationSort } from "./StationSort";

export function StationList(props: Props) {
    const stations = sortStations(props.stations);
    const list = stations.map(S => <StationCard key={S.id} station={S} />);

    return (
        <div class="container p-3">
            <div class="d-flex align-items-center justify-content-between font-monospace">
                <h5>Каналов: {stations.length}</h5>
                <StationSort />
            </div>
            <div class="d-flex flex-wrap justify-content-center">
                {list}
                <div class="card fake"></div>
                <div class="card fake"></div>
                <div class="card fake"></div>
                <div class="card fake"></div>
            </div>
        </div>
    );

    function sortStations(stations: Station[]) {
        switch (getSort()) {
            case "A-Z":
                return _.sortBy(stations, S => S.title.toLowerCase());
            case "new":
                return _.sortBy(stations, S => S.prefix == "record" ? 0 : -S.id);
            default:
                return stations;
        }
    }
}

interface Props {
    stations: Station[]
}
