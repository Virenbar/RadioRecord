import "@popperjs/core";
import "bootstrap";
import { render } from "preact";
import Stations from "../data/stations.json";
import { StationList } from "./components/StationList";

function Main() {
    const stations = Stations.list;
    return (
        <StationList stations={stations} />
    );
}

render(<Main />, document.getElementById("main") as HTMLElement);
